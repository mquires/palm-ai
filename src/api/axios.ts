import axiosOriginal from 'axios';

import {
  API_PROTOCOL,
  API_URL,
  API_X_ACTOR,
} from '@/libs/constants/url.constants';

const axios = axiosOriginal.create({
  baseURL: `${API_PROTOCOL}://${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'x-actor': API_X_ACTOR,
  },
});

export default axios;
