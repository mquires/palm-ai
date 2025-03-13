import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { imageProcessingApi } from '@/api/image-processing.requests';
import {
  ImageProcessingErrorResponse,
  ImageProcessingRequest,
  ImageProcessingResponse,
} from '@/types/image-processing-requests.types';

const useImageProcessing = (
  options?: UseMutationOptions<
    ImageProcessingResponse,
    AxiosError,
    ImageProcessingRequest
  >,
) => {
  return useMutation<
    ImageProcessingResponse,
    AxiosError,
    ImageProcessingRequest
  >({
    ...options,
    mutationKey: ['image-processing'],
    mutationFn: async (data: ImageProcessingRequest) => {
      try {
        const response = await imageProcessingApi.sendImage(data);
        return response.data;
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data) {
          throw new Error(
            (axiosError.response.data as ImageProcessingErrorResponse)
              .details || 'Unknown error occurred',
          );
        }
        throw error;
      }
    },
  });
};

export default useImageProcessing;
