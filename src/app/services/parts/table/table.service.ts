import { Injectable } from '@angular/core';
import { HeaderRow, BodyRow } from '../../../models/parts/table/table';
import { HeaderColumn } from '../../../models/parts/table/header-column';
import { BodyColumn } from '../../../models/parts/table/body-column';
import { ColumnProperty, HeaderItem } from '../../../models/parts/table/properties';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  createHeaderColumns(properties: ColumnProperty[], items: HeaderItem[]): HeaderRow {
    const fixedColumns = properties.filter(p => p.isFixed === true).map(p => new HeaderColumn(p.path, items.filter(i => i.itemCode === p.itemCode)[0].value, p.isFixed));
    const variableColumns = properties.filter(p => p.isFixed !== true).map(p => new HeaderColumn(p.path, items.filter(i => i.itemCode === p.itemCode)[0].value));
    return { fixedColumns: fixedColumns, variableColumns: variableColumns };
  }

  createBodyColumns(properties: ColumnProperty[], rows: any[]): BodyRow[] {
    return rows.map(row => {
      return {
        fixedColumns: properties.filter(p => p.isFixed === true).map(p => new BodyColumn(p.path, row, p.isFixed)),
        variableColumns: properties.filter(p => p.isFixed !== true).map(p => new BodyColumn(p.path, row)),
      }
    });
  }
}
