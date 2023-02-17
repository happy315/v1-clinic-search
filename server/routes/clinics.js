import searchClinics from "../controllers/clinics";
import clinicsQueryValidator from "../validators/search-clinics";
import { BadRequestHandler } from "../error-handlers/bad-request";
//###########################################################################
/**
 * Define clinic search route with GET method
 * @method - GET
 * @path '/clinics/search'
 * @handlers - It will handle the validation of request
 */
const clinicsRoutes = [
    {
        method: 'GET',
        path: '/clinics/search',
        handlers: [clinicsQueryValidator, BadRequestHandler, searchClinics]
    }
];

export default clinicsRoutes;
