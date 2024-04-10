const { validationResult } = require('express-validator')

const sendResponse = (res, statusCode, message, data = null) =>
{
    const response = { success: statusCode >= 200 && statusCode < 400, message: message, data: data };
    return res.status(statusCode).json(response);
};

const handleValidationErrors = (req, res, next) =>
{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        const errorMessages = errors.array().map(error => ({ field: error.path, message: error.msg }));
        return sendResponse(res, 422, 'Validation failed!', errorMessages)
    }
    next();
};


module.exports = {
    sendResponse,
    handleValidationErrors
}