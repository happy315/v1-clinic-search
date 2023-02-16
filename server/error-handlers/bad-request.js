import { validationResult } from "express-validator";

// Used to capture errors while validating request params/body
const BadRequestHandler = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        /** Error Result can be modified as required
         * for the time being its displayed as follow:
         * {
         *         "msg": "message",
         *         "param": "key_name",
         *         "location": "params/body/query"
         * }
         *  */
        return res.status(400).json({ errors: errors.array() });
    }

    // When no errors found return next handler callback
    return next();
};

export default BadRequestHandler;

