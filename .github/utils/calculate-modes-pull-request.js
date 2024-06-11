
// @ts-check
/** @param {import('github-script').AsyncFunctionArguments} AsyncFunctionArguments */
module.exports = async ({context}, defaultModesAsString, allModesAsString) => {
    const utils = require("./utils.js");

    let defaultModes = Array.from(JSON.parse(defaultModesAsString), (m) => m.toUpperCase());
    let requestedModes = Array.from(utils.getCustomAttributesFromMarkdown("artifact", context.payload.pull_request?.body), (m) => m.toUpperCase());
    let artifactModes = defaultModes.concat(requestedModes);
    let allModes = JSON.parse(allModesAsString);

    let modeSchema = new Array();
    for (let i = 0; i < allModes.length; i++) {
        let modeEntry = {};
        modeEntry.mode = allModes[i];
        if(artifactModes.includes(allModes[i].toUpperCase())) {
            modeEntry.artifact = true;
        } else {
            modeEntry.artifact = false;
        }
        modeSchema.push(modeEntry);
    }

    return JSON.stringify(modeSchema)
  }

  