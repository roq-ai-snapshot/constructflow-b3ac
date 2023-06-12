import { UserInterface } from 'interfaces/user';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  user_id: string;
  project_id: string;
  date: any;
  hours_worked: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  project?: ProjectInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  project_id?: string;
}
