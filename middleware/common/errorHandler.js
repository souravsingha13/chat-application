// 404 Not found handler

const createError = require('http-errors');
function notFoundHandler(req, res, next) {
    next(createError(404, 'Not Found'));
}

// default error handler
function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { title : 'Error page', message: err.message, error: err });
}

module.exports = {
    notFoundHandler,
    errorHandler
};