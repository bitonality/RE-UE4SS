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

        handlebars.registerHelper('pretty-date', humanReadableDate);
        handlebars.registerHelper('pretty-size', humanReadableSize);

        /** @type {string?} */
        let renderedResult = null;
        fs.readFile(
            templatePath,
            "utf8",
            (err, data) => {
                if (err) {
                    console.error(err);
                    throw err;
                }

                const template = handlebars.compile(JSON.stringify(data));
                renderedResult = template(templateData);
            }
        );

        if(renderedResult != null) {

            fs.writeFile(outputPath, renderedResult, err => {
                if (err) {
                    console.error(err);
                } else {
                console.log(`Wrote PR comment body to ${outputPath}.`);
                }
            });
              
        }
    }
};