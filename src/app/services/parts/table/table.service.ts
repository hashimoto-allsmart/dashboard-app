import { Injectable } from '@angular/core';
import { ColumnProperty, HeaderItem } from 'src/app/models/parts/table';
import { ColumnData } from './../../../models/parts/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  createHeaderColumns(properties: ColumnProperty[], items: HeaderItem[], isFixed: boolean): ColumnData[] {
    const params = properties.filter(_ => (_.isFixed !== undefined) ? _.isFixed === isFixed : true);
    return params.map(p => {
      return new ColumnData(p, items.filter(i => i.itemCode === p.itemCode)[0].value, true)
    });
  }

  createDataColumns(properties: ColumnProperty[], row: any, isFixed: boolean): ColumnData[] {
    const params = properties.filter(_ => (_.isFixed !== undefined) ? _.isFixed === isFixed : true);
    return params.map(p => new ColumnData(p, row));
  }
}
