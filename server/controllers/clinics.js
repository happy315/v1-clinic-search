import FetchClinics from "../services/clinics-service";
import HelperService from "../services/helper-service";

const ClinicsController = {

    // handler for searching clinics
    async searchClinics(req, res) {

        try {
            let clinics = await FetchClinics();

            // Apply filter iff filters are present in request
            if (HelperService.isFilterApplied(req?.query)) {
                clinics = clinics?.filter(clinic =>
                    HelperService.clinicMatchesFilterCriterias(clinic, req?.query)
                );
            }

            res.send({ success: true, data: clinics })
        }
        catch (err) {
            console.log("Error occured while searching for clinics : ", err);
            res.send({ success: false, msg: 'Something went wrong' });
        }
    }

}

export default ClinicsController;