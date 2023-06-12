import * as yup from 'yup';

export const equipmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  usage_count: yup.number().integer().required(),
  project_id: yup.string().nullable().required(),
});
