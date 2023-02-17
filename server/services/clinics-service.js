import axios from "axios";

//#################################################################################
/**
 * Get clinics data from the external endpoints, 
 * It will send async requests in async manner and wait for all to get complete,
 * instead of waiting for one at a time and then firing next one
 * 
 * @returns {Array} clinics - it will returns all the clinics data
 */
const getClinics = async () => {
    const clinicsURLs = process.env.ENDPOINTS_LIST;
    const clinicsRequests = [];
    // sending get requests in async manner
    clinicsURLs?.split(',')?.forEach(endpoint => {
        clinicsRequests.push(axios.get(endpoint));
    });

    const clinicsRes = [];
    // Promise await handler on all the clinics endpoints to get the data
    await Promise.all(clinicsRequests)
        .then(response => {
            response?.forEach(clinics => clinicsRes?.push(...(clinics?.data ?? [])));
        })
        .catch(err => console.log(err))
    return clinicsRes

};

export { getClinics };
