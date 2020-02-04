const Transport = require('winston-transport');
const consolere = require('console-remote-client');

module.exports = class YourCustomTransport extends Transport {
    constructor(opts) {
        super(opts);
        //
        // Consume any custom options here. e.g.:
        // - Connection information for databases
        // - Authentication information for APIs (e.g. loggly, papertrail,
        //   logentries, etc.).
        //
        this.consolere = consolere.connect('console.re', '80', opts.channel);
    }

    log(info, callback) {
        this.consolere.re[info.level](info.message);
        callback();
    }
};
