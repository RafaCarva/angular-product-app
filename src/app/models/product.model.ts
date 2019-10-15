import { Department } from './departments.model';

export interface Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  department: Department;
}
