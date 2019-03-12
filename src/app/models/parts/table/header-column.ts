import { ColumnDataBase } from './column-data-base';

export class HeaderColumn extends ColumnDataBase {

  constructor(key: string, data: any, isFixed?: boolean) {
    super(key, data, isFixed);
  }

  getValue(key: string, data: any): string {
    return data;
  }
}