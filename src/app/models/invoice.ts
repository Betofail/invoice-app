import { Company } from './company';
import { Client } from './client';
import { Item } from './item';

export class Invoice {
  id!: number;
  name!: string;
  client!: Client;
  company!: Company;
  items!: Array<Item>;
  total!: number;
}
