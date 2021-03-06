const moment = require('moment');

// creating a middleware fn
const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${
            req.originalUrl
        }: ${moment().format()}`
        );
    next();
};

module.exports = logger;