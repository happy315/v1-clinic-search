import { isFilterApplied, queryEnum, applySearchFilters } from "../../services/util-service";
import clinicsMockData from "../mock-data";

test('helper-serivce: isFilterApplied should return true when any of the filter is applied ', () => {
    expect(isFilterApplied(
        { [queryEnum.STATE]: 'CA' }
    )).toBeTruthy();

    expect(isFilterApplied(
        { [queryEnum.NAME]: 'abc' }
    )).toBeTruthy();

    expect(isFilterApplied(
        { [queryEnum.AVAILABLE_FROM]: '10:00' }
    )).toBeTruthy();

    expect(isFilterApplied(
        { [queryEnum.AVAILABLE_TILL]: '14:50' }
    )).toBeTruthy();
});

test('helper-serivce: isFilterApplied should return true when all of the filter are applied ', () => {
    expect(isFilterApplied(
        {
            [queryEnum.STATE]: 'CA',
            [queryEnum.NAME]: 'abc',
            [queryEnum.AVAILABLE_FROM]: '11:00',
            [queryEnum.AVAILABLE_TILL]: '22:50'
        }
    )).toBeTruthy();
});

test('helper-serivce: isFilterApplied should return false when none of the filter is applied ', () => {
    expect(isFilterApplied(null)).toBe(false);
    expect(isFilterApplied({})).toBe(false);
});

test('helper-serivce: applySearchFilters should return true when it matches filter criteria ', () => {
    expect(applySearchFilters(
        clinicsMockData[0],
        { [queryEnum.STATE]: 'fl' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[0],
        { [queryEnum.STATE]: 'florida' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[0],
        { [queryEnum.STATE]: 'Florida' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[1],
        { [queryEnum.STATE]: 'CA' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[1],
        { [queryEnum.NAME]: 'na' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[1],
        { [queryEnum.NAME]: 'National Veterinary Clinic' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[2],
        { [queryEnum.NAME]: 'ge' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[2],
        { [queryEnum.NAME]: 'German Pets Clinics' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[3],
        { [queryEnum.AVAILABLE_FROM]: '10:00' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[3],
        { [queryEnum.AVAILABLE_TILL]: '23:50' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[4],
        { [queryEnum.AVAILABLE_FROM]: '10:00' }
    )).toBeTruthy();

    expect(applySearchFilters(
        clinicsMockData[4],
        { [queryEnum.AVAILABLE_TILL]: '23:50' }
    )).toBeTruthy();
});