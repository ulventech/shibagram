import axios from 'axios';
import qs from 'qs';
import config from '../../config';

async function getShibas(queryParams) {
  return axios({
    method: 'GET',
    url: `${config.API_BASE}/shibes?${qs.stringify(queryParams)}`,
    data: {},
  });
}

export default {
    getShibas,
};
