
// @ts-check
/** @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({github, context}) => {
    context.payload.pull_request?.body
    const fs = require('fs');
    const utils = require("./utils.js");
      const opts = await github.rest.actions.listWorkflowRunArtifacts.endpoint.merge({
        owner: context.repo.owner,
        repo: context.repo.repo,
        run_id: context.runId,
      });

      const artifacts = await github.paginate(opts);
    
      var templateData = new Array();
      for (const artifact of artifacts) {
        var artifactData = {};

        let artifactNameComponents = artifact.name.split('-');
        artifactData.badgeName = "Build-Success"; // Default name to pass to shields.io.
        if(artifactNameComponents.length > 1) {
          // Attempt to simplify the artifact name for a prettier status badge.
          // Ex. turn 'MSVC-Game__Shipping__Win64-SHA' into 'MSVC_Game__Shipping__Win64'.
          // 'MSVC-Game__Shipping__Win64' will then be rendered as 'MSVC | Game_Shipping_Win64' in the shields.io badge.
          artifactData.badgeName = artifactNameComponents.slice(0,2).join('-');
        }

        artifactData.logsUrl = `${context.serverUrl}/${context.repo}/actions/runs/${context.runId}`;
        // @ts-ignore
        artifactData.prCommit = context.payload.pull_request.head.sha;
        artifactData.mergeCommit = context.sha;
        artifactData.size = utils.humanReadableSize(artifact.size_in_bytes, 2);
        artifactData.lastUpdated = utils.humanReadableDate(new Date(artifact.updated_at));
        artifactData.expiresAt = utils.humanReadableDate(new Date(artifact.expires_at));

        templateData.push(artifactData);
      }

      let renderedResult = "";
      fs.readFile('./markdown-templates/pull-request-artifact.hbs', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        var template = handlebars.compile(JSON.stringify(data));
        renderedResult = template(templateData);
      });
      

      return renderedResult;
  }

  