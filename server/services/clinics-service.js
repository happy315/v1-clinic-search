import axios from "axios";

const FetchClinics = async () => {
    const endpoints = process.env.ENDPOINTS_LIST;
    const clinicsDataFetch = [];

    /**
     * send async requests in async manner and wait for all to get complete
     * instead of waiting for one at a time and then firing next one
     */
    endpoints?.split(',')?.forEach(endpoint => {
        clinicsDataFetch.push(axios.get(endpoint));
    });

    const clinics = [];
    await Promise.all(clinicsDataFetch)
        .then(values => {
            values?.forEach(val => clinics?.push(...(val?.data ?? [])));
        })
        .catch(err => console.log(err))

    return clinics;

};

export default FetchClinics;