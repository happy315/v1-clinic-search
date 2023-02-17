import getClinics from "../services/clinics-service";
import { isFilterApplied, applySearchFilters } from "../services/util-service";

//######################################################################################
/**
 * Controller for clinics search, it will search for clinics data,
 * It will apply the required filters on search data and it will return the results.
 * OPTIONAL parameters of query:
 *   - name
 *   - state
 *   - availableFrom
 *   - availableTill
 *   - clinicName
 *   - stateName
 *   - stateCode
 * @param {Object} req 
 * @param {Object} res 
 * @returns {Object}
 *  - success {boolean} true/false 
 *  - data {array} clinics data 
 */
const searchClinics = async (req, res) => {

    try {
        let clinics = await getClinics();

        // Apply filter if query parameters are present in request
        if (clinics && clinics.length > 0 && isFilterApplied(req?.query)) {
            clinics = clinics?.filter(clinic =>
                applySearchFilters(clinic, req?.query)
            );
        }

        // return clinics searched data
        res.send({ success: true, data: clinics })
    } catch (err) {
        console.log("Error occured while searching for clinics : ", err.message);
        res.send({ success: false, msg: err.message });
    }
}

export default searchClinics