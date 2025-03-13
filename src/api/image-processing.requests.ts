import axios from './axios';
import { ImageProcessingRequest } from '@/types/image-processing-requests.types';

export const imageProcessingApi = {
  sendImage: (data: ImageProcessingRequest) => {
    return axios.post('/', data);
  },
};
