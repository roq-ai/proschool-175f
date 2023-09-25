import { StudentInterface } from 'interfaces/student';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface AnalyticsInterface {
  id?: string;
  student_id: string;
  course_id: string;
  grade?: number;
  attendance?: number;
  performance?: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  course?: CourseInterface;
  _count?: {};
}

export interface AnalyticsGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  course_id?: string;
  performance?: string;
}
