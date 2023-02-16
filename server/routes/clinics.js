import ClinicsController from "../controllers/clinics";
import BadRequestHandler from "../error-handlers/bad-request";
import SearchClinicsValidator from "../validators/search-clinics";

const ClinicsRoutes = [
    {
        method: 'GET',
        path: '/clinics/search',
        handlers: [SearchClinicsValidator, BadRequestHandler, ClinicsController.searchClinics]
    }
];

export default ClinicsRoutes
