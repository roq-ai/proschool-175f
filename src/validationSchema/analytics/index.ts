import * as yup from 'yup';

export const analyticsValidationSchema = yup.object().shape({
  grade: yup.number().integer().nullable(),
  attendance: yup.number().integer().nullable(),
  performance: yup.string().nullable(),
  student_id: yup.string().nullable().required(),
  course_id: yup.string().nullable().required(),
});
