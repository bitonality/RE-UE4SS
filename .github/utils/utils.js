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





module.exports = {
    /**
 * Converts the size in bytes to a human-friendly representation.
 * @param {number} bytes Total number of bytes.
 * @returns {string} Human-friendly representation.
 */
    humanReadableSize: function(bytes) {
    if (bytes == 0) return '0 Bytes';
    let decimals = 2;
    var k = 1024,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
},
    /**
     * Converts a date into a human-friendly UTC representation.
     * @param {Date} date Date to convert
     * @returns {string} Human-friendly UTC representation of the date.
     */
    humanReadableDate: function(date) {
        return dateTimeFormat.format(date);
    },
    /**
     * Parses a markdown checklist and returns a map of <checklistEntry, bool>.
     * This function replaces backticks (`) in checklist entries if they exist.
     * @param {string} checklistName 
     * @param {string} markdownBody 
     * @returns {Map<string, boolean>}
     */
    getChecklistFromMarkdown: function (markdownBody) {
        /** @type {Map<string, boolean>} */
        let checklistMap = new Map();

        if (markdownBody == null) {
            return checklistMap;
        }

        const checklistItemRegex = new RegExp('\\-\\s\\[(.{1})]\\s*(.+)', "gi");
        const checklistItems = markdownBody.matchAll(checklistItemRegex);

        for (const checklistItem of checklistItems) {
            checklistMap.set(checklistItem[2].replace(/`/g, ''), checklistItem[1].localeCompare("x", undefined, { sensitivity: "base" }) === 0);
        }

        return checklistMap;
    },
    /**
     * Extracts content enclosed between specific hidden HTML comment tags within a markdown string.
     * @param {*} tagName The name of the tag used to identify the hidden HTML comment tags.
     * @param {*} markdownBody The markdown string from which the content is to be extracted.
     * @returns {string?} Extracted markdown content or null.
     */
    getHiddenTagsFromMarkdown: function (tagName, markdownBody) {
        const openingTagRegex = new RegExp(`^(<!--\\s*START_${tagName}\\s*-->)$\\s`, "gim");
        const closingTagRegex = new RegExp(`\\s^(<!--\\s*END_${tagName}\\s*-->)$`, "gim");

        let openingIndex = null;
        let closingIndex = null;

        for (m of markdownBody.matchAll(openingTagRegex)) {
            if (openingIndex != null) {
                return null;
            }

            openingIndex = m.index + m[0].length;
        }

        for (m of markdownBody.matchAll(closingTagRegex)) {
            if (closingIndex != null) {
                return null;
            }

            closingIndex = m.index;
        }

        if (openingIndex === null || closingIndex === null) {
            return null;
        }

        return markdownBody.slice(openingIndex, closingIndex);
    },
    /**
     * Generates and writes a markdown file by passing data to a handlebars template.
     * @param {string} templatePath Path to handlebars template.
     * @param {*} templateData Data to pass to handlebars template.
     * @param {string} outputPath Path to write the processed markdown file to.
     * @param {*} handlebars Handlebars module.
     */
    generateMarkdownFromTemplate: function (templatePath, templateData, outputPath, handlebars) {
        if (!fs.existsSync(templatePath)) {
            throw new Error(`Template not found at: ${templatePath}`);
        }

        // Register our custom handlebars helpers.
        handlebars.registerHelper('pretty-date', module.exports.humanReadableDate);
        handlebars.registerHelper('pretty-size', module.exports.humanReadableSize);

        /** @type {string?} */
        let renderedResult = null;

        const data = fs.readFileSync(templatePath, "utf8");

        const template = handlebars.compile(data);
        renderedResult = template(templateData);

        if (renderedResult != null) {
            if (!fs.existsSync(path.dirname(outputPath))) {
                fs.mkdirSync(path.dirname(outputPath));
            }
            fs.writeFileSync(outputPath, renderedResult);
        }
    },
    
};