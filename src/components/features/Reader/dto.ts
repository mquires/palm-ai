import { convertFileToBase64 } from '@/utils/convertFileToBase64';

export interface FormValues {
  image: File;
}

export const formValuesToData = async (values: FormValues) => {
  return {
    image:
      values.image instanceof File
        ? await convertFileToBase64(values.image)
        : values.image,
  };
};
