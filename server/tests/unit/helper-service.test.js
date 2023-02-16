import HelperService, { PARAMS } from "../../services/helper-service";
import mockClinicsData from "../mock-data";

test('helper-serivce: isFilterApplied should return true when any of the filter is applied ', () => {
    expect(HelperService?.isFilterApplied(
        { [PARAMS.STATE]: 'CA' }
    )).toBeTruthy();

    expect(HelperService?.isFilterApplied(
        { [PARAMS.NAME]: 'abc' }
    )).toBeTruthy();

    expect(HelperService?.isFilterApplied(
        { [PARAMS.AVAILABLE_FROM]: '10:00' }
    )).toBeTruthy();

    expect(HelperService?.isFilterApplied(
        { [PARAMS.AVAILABLE_TILL]: '14:50' }
    )).toBeTruthy();
});

test('helper-serivce: isFilterApplied should return true when all of the filter are applied ', () => {
    expect(HelperService?.isFilterApplied(
        {
            [PARAMS.STATE]: 'CA',
            [PARAMS.NAME]: 'abc',
            [PARAMS.AVAILABLE_FROM]: '10:00',
            [PARAMS.AVAILABLE_TILL]: '14:50'
        }
    )).toBeTruthy();
});

test('helper-serivce: isFilterApplied should return false when none of the filter is applied ', () => {
    expect(HelperService?.isFilterApplied(null)).toBe(false);
    expect(HelperService?.isFilterApplied({})).toBe(false);
});

test('helper-serivce: clinicMatchesFilterCriterias should return true when it matches filter criteria ', () => {
    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[0],
        { [PARAMS.STATE]: 'fl' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[0],
        { [PARAMS.STATE]: 'florida' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[0],
        { [PARAMS.STATE]: 'Florida' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[1],
        { [PARAMS.STATE]: 'CA' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[1],
        { [PARAMS.NAME]: 'na' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[1],
        { [PARAMS.NAME]: 'National Veterinary Clinic' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[2],
        { [PARAMS.NAME]: 'ge' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[2],
        { [PARAMS.NAME]: 'German Pets Clinics' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[3],
        { [PARAMS.AVAILABLE_FROM]: '10:00' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[3],
        { [PARAMS.AVAILABLE_TILL]: '23:50' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[4],
        { [PARAMS.AVAILABLE_FROM]: '10:00' }
    )).toBeTruthy();

    expect(HelperService?.clinicMatchesFilterCriterias(
        mockClinicsData[4],
        { [PARAMS.AVAILABLE_TILL]: '23:50' }
    )).toBeTruthy();
});