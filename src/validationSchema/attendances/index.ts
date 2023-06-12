import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  hours_worked: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  project_id: yup.string().nullable().required(),
});
