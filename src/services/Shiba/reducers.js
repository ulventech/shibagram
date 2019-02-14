import {
    SHIBA_GET_SHIBAS_REQUEST,
    SHIBA_GET_SHIBAS_SUCCESS,
    SHIBA_GET_SHIBAS_FAILURE,
} from '../types';

const DEFAULT_STATE = {
    shiba: {},
    shibas: [],
    isLoading: false,
};

export default (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SHIBA_GET_SHIBAS_REQUEST: return {
            ...state,
            tasks: [],
            isLoading: true,
        };
        case SHIBA_GET_SHIBAS_SUCCESS: return {
            ...state,
            shibas: action.payload,
            isLoading: false,
        };
        case SHIBA_GET_SHIBAS_FAILURE: return {
            ...state,
            isLoading: false,
        };
        default: return state;
    }
}
