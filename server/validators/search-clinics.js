import { check } from 'express-validator';

const TimeValidationRegex = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');

const SearchClinicsValidator = [
    check('name').optional().isString(),
    check('state').optional().isString(),
    check('availableFrom').optional().matches(TimeValidationRegex),
    check('availableTill').optional().matches(TimeValidationRegex)
];

export default SearchClinicsValidator;