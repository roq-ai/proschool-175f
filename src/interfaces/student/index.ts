import { AnalyticsInterface } from 'interfaces/analytics';
import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  grade: number;
  class: string;
  enrollment_date: any;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  analytics?: AnalyticsInterface[];
  course?: CourseInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    analytics?: number;
    course?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  class?: string;
  user_id?: string;
  organization_id?: string;
}
