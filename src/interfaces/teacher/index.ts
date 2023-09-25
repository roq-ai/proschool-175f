import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  subject: string;
  hired_date: any;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  course?: CourseInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    course?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  subject?: string;
  user_id?: string;
  organization_id?: string;
}
