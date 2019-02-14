import { takeLatest, call, put } from 'redux-saga/effects';
import shortid from 'shortid';
import API from '../../api';
import {
    SHIBA_GET_SHIBAS_REQUEST,
    SHIBA_GET_SHIBAS_SUCCESS,
    SHIBA_GET_SHIBAS_FAILURE,
} from '../types';

function* getTasks() {
    try {
        const response = yield call(API.getShibas, {
            count: 20,
        });
        const data = response.data.map((o) => ({
            id: shortid.generate(),
            url: o,
        }));
        yield put({
            type: SHIBA_GET_SHIBAS_SUCCESS,
            payload: data,
        });
    } catch (err) {
        console.error(err);
        yield put({ type: SHIBA_GET_SHIBAS_FAILURE });
    }
}

export default function* () {
    yield takeLatest(SHIBA_GET_SHIBAS_REQUEST, getTasks);
};
