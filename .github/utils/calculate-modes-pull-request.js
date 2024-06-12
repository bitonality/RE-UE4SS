
// @ts-check
/** @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({context}, requestedModesCommentBody, allModesAsString) => {
    const utils = require("./utils.js");

    const requestedArtifacts = utils.getChecklistFromMarkdown("ARTIFACT_LIST", requestedModesCommentBody);
    const modeSchema = JSON.parse(allModesAsString).map(m => ({mode: m, artifact: requestedArtifacts[m]}));
    
    return JSON.stringify(modeSchema)
  }

  