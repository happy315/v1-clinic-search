import { validationResult } from "express-validator";

//######################################################################################
/**
 * This handler used to capture errors while validating request params/body
 * if no error found, it will return next handler callback
 * @param {Object} req 
 * @param {Object} res 
 * @param {*} next 
 * @returns {Object} error or next
 */
const BadRequestHandler = (req, res, next) => {
    
    // calling external function for validating request data
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // Error Result can be modified as required
        return res.status(400).json({ errors: errors.array() });
    }

    // When no errors found return next handler callback
    return next();
};

export { BadRequestHandler };

