import * as yup from 'yup';
import { attendanceValidationSchema } from 'validationSchema/attendances';
import { equipmentValidationSchema } from 'validationSchema/equipment';
import { taskValidationSchema } from 'validationSchema/tasks';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  organization_id: yup.string().nullable().required(),
  attendance: yup.array().of(attendanceValidationSchema),
  equipment: yup.array().of(equipmentValidationSchema),
  task: yup.array().of(taskValidationSchema),
});
