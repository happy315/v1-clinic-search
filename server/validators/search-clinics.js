import { check } from 'express-validator';

//###########################################################################
/**
 * Validation on time with Regex 
 * Example - '09:00' or '22:10'
 */
const RegexTimeValidation = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');

//###########################################################################
/**
 * Validate search params
 * - name {string}
 * - state {string}
 * - availableFrom - match with the time regex
 * - availableTill - match with the time regex
 */
const clinicsQueryValidator = [
    check('name').optional().isString(),
    check('state').optional().isString(),
    check('availableFrom').optional().matches(RegexTimeValidation),
    check('availableTill').optional().matches(RegexTimeValidation)
];

export { clinicsQueryValidator };