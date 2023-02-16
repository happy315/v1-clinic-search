export const PARAMS = {
    NAME: 'name',
    STATE: 'state',
    AVAILABLE_FROM: 'availableFrom',
    AVAILABLE_TILL: 'availableTill',
    CLINIC_NAME: 'clinicName',
    STATE_NAME: 'stateName',
    STATE_CODE: 'stateCode',
};

const HelperService = {
    isFilterApplied(params = null) {
        let filtersApplied = false;
        const filterKeys = [PARAMS.NAME, PARAMS.STATE, PARAMS.AVAILABLE_FROM, PARAMS.AVAILABLE_TILL];
        const paramKeys = Object.keys(params ?? {});
        filterKeys?.forEach(key => {
            if (paramKeys?.includes(key)) {
                filtersApplied = true;
            }
        })
        return filtersApplied;
    },

    clinicMatchesFilterCriterias(clinic, params) {
        let criteriaMatched = true;
        if (params[PARAMS.NAME]) {
            criteriaMatched &&= (clinic[PARAMS.NAME]?.toLowerCase().includes(params[PARAMS.NAME]?.toLowerCase())
                || clinic[PARAMS.CLINIC_NAME]?.includes(params[PARAMS.NAME]));
        }

        if (params[PARAMS.STATE]) {
            criteriaMatched &&= (clinic[PARAMS.STATE_CODE] === params[PARAMS.STATE] ||
                clinic[PARAMS.STATE_NAME]?.toLowerCase().includes(params[PARAMS.STATE]?.toLowerCase()));
        }

        if (params[PARAMS.AVAILABLE_FROM]) {
            criteriaMatched &&= (this.getDateTimeEquivalent(clinic?.availability?.from) >= this.getDateTimeEquivalent(params[PARAMS.AVAILABLE_FROM])
                || this.getDateTimeEquivalent(clinic?.opening?.from) >= this.getDateTimeEquivalent(params[PARAMS.AVAILABLE_FROM]));
        }

        if (params[PARAMS.AVAILABLE_TILL]) {
            criteriaMatched &&= (this.getDateTimeEquivalent(clinic?.availability?.to) <= this.getDateTimeEquivalent(params[PARAMS.AVAILABLE_TILL])
                || this.getDateTimeEquivalent(clinic?.opening?.to) <= this.getDateTimeEquivalent(params[PARAMS.AVAILABLE_TILL]));
        }

        return criteriaMatched;
    },

    getDateTimeEquivalent(time) {
        return new Date('1/1/1999 ' + time);
    }

}

export default HelperService;