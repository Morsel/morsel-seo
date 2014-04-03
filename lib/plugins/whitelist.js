var url = require("url");

module.exports = {
	init: function() {
		this.ALLOWED_DOMAINS = ['dev.eatmorsel.com','staging.eatmorsel.com'];
	},
    beforePhantomRequest: function(req, res, next) {
        var parsed = url.parse(req.prerender.url);

        if(this.ALLOWED_DOMAINS.indexOf(parsed.hostname) > -1) {
            next();
        } else {
            res.send(404);
        }
    }
}