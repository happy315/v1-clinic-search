import searchClinics from "../controllers/clinics";
import clinicsQueryValidator from "../validators/search-clinics";
import { ValidateRequestMiddleware } from "../middleware/validate-request-middleware";
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
        handlers: [clinicsQueryValidator, ValidateRequestMiddleware, searchClinics]
    }
];

export default clinicsRoutes;
