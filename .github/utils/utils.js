const fs = require("fs");
const path = require("path");

const dateTimeFormat = new Intl.DateTimeFormat('default', {
    month: 'short',
    day: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'utc',
    timeZoneName: 'short',
});

    /**
     * Converts the size in bytes to a human-friendly representation.
     * @param {number} bytes Total number of bytes.
     * @param {number} decimals Total number of decimals to represent. 
     * @returns {string} Human-friendly representation.
     */
    function humanReadableSize(bytes, decimals) {
        if(bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      }

    /**
     * Converts a date into a human-friendly UTC representation.
     * @param {Date} date Date to convert
     * @returns {string} Human-friendly UTC representation of the date.
     */
    function humanReadableDate(date) {
        return dateTimeFormat.format(date);
    }

module.exports = {

    /**
     * 
     * @param {*} attributeName 
     * @param {*} markdownBody 
     * @returns 
     */
    getCustomAttributesFromMarkdown: function(attributeName, markdownBody) {
        const re = new RegExp(`\\[${attributeName}=(.*?)\\]`,"gi");
        console.log(re);
        let matches = markdownBody.matchAll(re);
        return Array.from(matches, (m) => m[1]);
    },
    /**
     * 
     * @param {string} checklistName 
     * @param {string} markdownBody 
     * @returns {Object.<string, boolean>}
     */
    getChecklistFromMarkdown: function(checklistName, markdownBody) {
        const checklistRegex = new RegExp(`<!--\\s*START_${checklistName}\\s*-->(.*)<!--\\s*END_${checklistName}\\s*-->`, "gis");
        const checklist = Array.from(markdownBody.matchAll(checklistRegex), m=> m[1]);
        const checklistItemRegex = new RegExp('\\-\\s\\[(.{1})]\\s`([^`]*)`', "gi");
        const checklistItems = checklist[0].matchAll(checklistItemRegex);
        let checklistMap = {}
        for(const checklistItem of checklistItems) {
            checklistMap[checklistItem[2]] = (checklistItem == "x");
        }
        
        return checklistMap;
    },
    /**
     * Generate a markdown file by passing data to a handlebars template.
     * @param {string} templatePath Path to handlebars template.
     * @param {*} templateData Data to pass to handlebars template.
     * @param {string} outputPath Path to write the processed markdown file to.
     * @param {*} handlebars Handlebars module.
     * @returns {string?} Generated markdown
     */
    generateMarkdownFromTemplate: function(templatePath, templateData, outputPath, handlebars) {
        if(!fs.existsSync(templatePath)) {
            throw new Error(`Template not found at: ${templatePath}`);
        }
        console.log("TEMPLATE: %s", JSON.stringify(templateData));
        // Register our custom handlebars helpers.
        handlebars.registerHelper('pretty-date', humanReadableDate);
        handlebars.registerHelper('pretty-size', humanReadableSize);

        /** @type {string?} */
        let renderedResult = null;
        console.log("template path: %s", templatePath);
        const data = fs.readFileSync(templatePath, "utf8");
        console.log("data %s", data)
        const template = handlebars.compile(data);
        renderedResult = template(templateData);
        console.log(renderedResult)
        if(renderedResult != null) {
            if(!fs.existsSync(path.dirname(outputPath))) {
                fs.mkdirSync(path.dirname(outputPath));
            }
            console.log(outputPath);
            fs.writeFileSync(outputPath, renderedResult);
            console.log(`Wrote PR comment body to ${outputPath}.`);
        }
    }
};