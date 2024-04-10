const { body, param } = require('express-validator');

const modelFieldMapping = {
    genericId: {
        id: { validations: [param("id").notEmpty().withMessage('Id not found.')] }
    },
    user: {
        firstname: { validations: [body('firstname').notEmpty().withMessage('firstname is required')] },
        lastname: { validations: [body('lastname').notEmpty().withMessage('lastname is required')] },
        password: { validations: [body('password').notEmpty().withMessage('password is required')] },
        role: { validations: [body('role').notEmpty().withMessage('role is required')] },
        email: { validations: [body('email').isEmail().withMessage('Please enter a valid email')] }
    },
};

module.exports = modelFieldMapping