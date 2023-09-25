import { AnalyticsInterface } from 'interfaces/analytics';
import { TeacherInterface } from 'interfaces/teacher';
import { StudentInterface } from 'interfaces/student';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  teacher_id: string;
  student_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  analytics?: AnalyticsInterface[];
  teacher?: TeacherInterface;
  student?: StudentInterface;
  organization?: OrganizationInterface;
  _count?: {
    analytics?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  teacher_id?: string;
  student_id?: string;
  organization_id?: string;
}
