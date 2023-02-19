//###########################################################################
/**
 * Query Enums for the search query params
 */
const queryEnum = {
    NAME: 'name',
    CLINIC_NAME: 'clinicName',
    STATE: 'state',
    AVAILABLE_FROM: 'availableFrom',
    AVAILABLE_TILL: 'availableTill',
    STATE_NAME: 'stateName',
    STATE_CODE: 'stateCode',
};

//###########################################################################
/**
 * Check is search query filters are applied or not
 * @returns {boolean} - true/false
 */
const isFilterApplied = (params = null) => {
    let filtersApplied = false;
    const filterKeys = [queryEnum.NAME, queryEnum.STATE, queryEnum.AVAILABLE_FROM, queryEnum.AVAILABLE_TILL];
    const paramKeys = Object.keys(params ?? {});
    filterKeys?.forEach(key => {
        if (paramKeys?.includes(key)) {
            filtersApplied = true;
        }
    })
    return filtersApplied;
}

//###########################################################################
/**
 * Apply search filters on clinic data, it will match with the query params
 * @returns {boolean} - true/false
 */
const applySearchFilters = (clinic, params) => {
    let isMatched = true;
    if (params[queryEnum.NAME]) {
        isMatched &&= (clinic[queryEnum.NAME]?.toLowerCase().includes(params[queryEnum.NAME]?.toLowerCase())
            || clinic[queryEnum.CLINIC_NAME]?.includes(params[queryEnum.NAME]));
    }

    if (params[queryEnum.STATE]) {
        isMatched &&= (clinic[queryEnum.STATE_CODE] === params[queryEnum.STATE] ||
            clinic[queryEnum.STATE_NAME]?.toLowerCase().includes(params[queryEnum.STATE]?.toLowerCase()));
    }

    if (params[queryEnum.AVAILABLE_FROM]) {
        isMatched &&= (getDateTimeEq(clinic?.availability?.from) >= getDateTimeEq(params[queryEnum.AVAILABLE_FROM])
            || getDateTimeEq(clinic?.opening?.from) >= getDateTimeEq(params[queryEnum.AVAILABLE_FROM]));
    }

    if (params[queryEnum.AVAILABLE_TILL]) {
        isMatched &&= (getDateTimeEq(clinic?.availability?.to) <= getDateTimeEq(params[queryEnum.AVAILABLE_TILL])
            || getDateTimeEq(clinic?.opening?.to) <= getDateTimeEq(params[queryEnum.AVAILABLE_TILL]));
    }

    return isMatched;
}

//###########################################################################
/**
 * Get date time eq with the query time
 */
const getDateTimeEq = (time) => {
    return new Date('1/1/2023 ' + time);
}

export {
    isFilterApplied,
    applySearchFilters,
    getDateTimeEq,
    queryEnum
};