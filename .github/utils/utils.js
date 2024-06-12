const fs = require("fs");

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
     * @param {number} decimals Total number of decimals to represent. 
     * @returns {string} Human-friendly representation.
     */
    humanReadableSize: function(bytes, decimals) {
        if(bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      },
    /**
     * Converts a date into a human-friendly UTC representation.
     * @param {Date} date Date to convert
     * @returns {string} Human-friendly UTC representation of the date.
     */
    humanReadableDate: function (date) {
        return dateTimeFormat.format(date);
    },
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
     * @param {string} templatePath Path to handlebars template.
     * @param {*} templateData Data to pass to handlebars template.
     * @param {*} handlebars Handlebars module.
     * @returns {string?} Generated markdown
     */
    generateMarkdownFromTemplate: function(templatePath, templateData, handlebars) {
        if(!fs.existsSync(templatePath)) {
            throw new Error(`Template not found at: ${templatePath}`);
        }

        fs.readFile(
            templatePath,
            "utf8",
            (err, data) => {
                if (err) {
                    console.error(err);
                    throw err;
                }

                const template = handlebars.compile(JSON.stringify(data));
                console.log(data);
                renderedResult = template(templateData);
                console.log(renderedResult);
                return renderedResult;
            }
        );
    }
};