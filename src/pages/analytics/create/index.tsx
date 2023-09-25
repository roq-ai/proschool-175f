import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createAnalytics } from 'apiSdk/analytics';
import { analyticsValidationSchema } from 'validationSchema/analytics';
import { StudentInterface } from 'interfaces/student';
import { CourseInterface } from 'interfaces/course';
import { getStudents } from 'apiSdk/students';
import { getCourses } from 'apiSdk/courses';
import { AnalyticsInterface } from 'interfaces/analytics';

function AnalyticsCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: AnalyticsInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createAnalytics(values);
      resetForm();
      router.push('/analytics');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AnalyticsInterface>({
    initialValues: {
      grade: 0,
      attendance: 0,
      performance: '',
      student_id: (router.query.student_id as string) ?? null,
      course_id: (router.query.course_id as string) ?? null,
    },
    validationSchema: analyticsValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Analytics',
              link: '/analytics',
            },
            {
              label: 'Create Analytics',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Analytics
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Grade"
            formControlProps={{
              id: 'grade',
              isInvalid: !!formik.errors?.grade,
            }}
            name="grade"
            error={formik.errors?.grade}
            value={formik.values?.grade}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('grade', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Attendance"
            formControlProps={{
              id: 'attendance',
              isInvalid: !!formik.errors?.attendance,
            }}
            name="attendance"
            error={formik.errors?.attendance}
            value={formik.values?.attendance}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('attendance', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.performance}
            label={'Performance'}
            props={{
              name: 'performance',
              placeholder: 'Performance',
              value: formik.values?.performance,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<StudentInterface>
            formik={formik}
            name={'student_id'}
            label={'Select Student'}
            placeholder={'Select Student'}
            fetcher={getStudents}
            labelField={'class'}
          />
          <AsyncSelect<CourseInterface>
            formik={formik}
            name={'course_id'}
            label={'Select Course'}
            placeholder={'Select Course'}
            fetcher={getCourses}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/analytics')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'analytics',
    operation: AccessOperationEnum.CREATE,
  }),
)(AnalyticsCreatePage);
