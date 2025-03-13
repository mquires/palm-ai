import * as Yup from 'yup';

export const getSchema = () => {
  return Yup.object().shape({
    image: Yup.mixed().required(),
  });
};
