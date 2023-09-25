import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  teacher_id: yup.string().nullable().required(),
  student_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
