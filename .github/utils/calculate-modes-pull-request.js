
// @ts-check
/** @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({context}, defaultModesAsString, allModesAsString) => {
    const utils = require("./utils.js");

    const defaultModes = JSON.parse(defaultModesAsString).map(m => m.toUpperCase());
    const requestedModes = utils.getCustomAttributesFromMarkdown("artifact", context.payload.pull_request?.body).map(m => m.toUpperCase());
    const artifactModes = defaultModes.concat(requestedModes);
    
    const allModes = JSON.parse(allModesAsString);
    const modeSchema = allModes.map(m => ({mode: m, artifact: artifactModes.includes(m.toUpperCase())}));

    return JSON.stringify(modeSchema)
  }

  