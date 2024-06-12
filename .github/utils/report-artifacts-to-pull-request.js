// @ts-check



/** @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({ github, context }, handlebars) => {
    const path = require('path');
    const fs = require("fs");
    const utils = require("./utils.js");
    const opts =
        await github.rest.actions.listWorkflowRunArtifacts.endpoint.merge({
            owner: context.repo.owner,
            repo: context.repo.repo,
            run_id: context.runId,
        });

    const artifacts = await github.paginate(opts);
    /** @type {{artifact: Array.<Object.<string, string>> }} */
    const templateData = { artifact: [] };

    if(artifacts.length == 0) {
        // Nothing to report to the PR.
        return;
    }

    for (const artifact of artifacts) {
        /** @type {Object.<string, string>} */
        let artifactData = {};

        let artifactNameComponents = artifact.name.split("-");
        artifactData["badgeName"] = "Build-Success"; // Default name to pass to shields.io.
        if (artifactNameComponents.length > 1) {
            // Attempt to simplify the artifact name for a prettier status badge.
            // Ex. turn 'MSVC-Game__Shipping__Win64-SHA' into 'MSVC_Game__Shipping__Win64'.
            // 'MSVC-Game__Shipping__Win64' will then be rendered as 'MSVC | Game_Shipping_Win64' in the shields.io badge.
            artifactData["badgeName"] = artifactNameComponents.slice(0, 2).join("-");
        }

        artifactData["logsUrl"] = `${context.serverUrl}/${context.repo}/actions/runs/${context.runId}`;
        // @ts-ignore
        artifactData["prCommit"] = context.payload.pull_request.head.sha;
        artifactData["mergeCommit"] = context.sha;
        artifactData["size"] = utils.humanReadableSize(artifact.size_in_bytes, 2);
        artifactData["lastUpdated"] = utils.humanReadableDate(
            new Date(artifact.updated_at)
        );
        artifactData["expiresAt"] = utils.humanReadableDate(
            new Date(artifact.expires_at)
        );

        templateData.artifact.push(artifactData);
    }

    return utils.generateMarkdownFromTemplate("./.github/utils/markdown-templates/pull-request-artifact.js", templateData, handlebars);
    
   

};
