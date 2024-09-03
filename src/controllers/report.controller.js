const reportService = require('../services/report.service');

const entrieExit = async function(req, res, next) {
    try {
        const report = await reportService.entrieExit(req.query);
        res.status(200).send(report);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    entrieExit
}
