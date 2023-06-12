import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface EquipmentInterface {
  id?: string;
  name: string;
  description?: string;
  usage_count: number;
  project_id: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  _count?: {};
}

export interface EquipmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  project_id?: string;
}
