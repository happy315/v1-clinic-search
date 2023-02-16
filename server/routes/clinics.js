import ClinicsController from "../controllers/clinics";
import BadRequestHandler from "../error-handlers/bad-request";
import SearchClinicsValidator from "../validators/search-clinics";

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
        handlers: [SearchClinicsValidator, BadRequestHandler, ClinicsController.searchClinics]
    }
];

export { clinicsRoutes }
