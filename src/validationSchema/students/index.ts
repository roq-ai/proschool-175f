import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  grade: yup.number().integer().required(),
  class: yup.string().required(),
  enrollment_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
