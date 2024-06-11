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
    humanReadableSize: function(bytes, decimals) {
        if(bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      },
    humanReadableDate: function (date) {
        return dateTimeFormat.format(date);
    }
};