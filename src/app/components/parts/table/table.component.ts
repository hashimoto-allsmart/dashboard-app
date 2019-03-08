import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ColumnData, ColumnProperty, HeaderItem } from './../../../models/parts/table';
import { TableService } from '../../../services/parts/table/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() properties: ColumnProperty[];

  @Input() items: HeaderItem[];

  @Input() rows: any[];

  /** テーブル要素 */
  el: HTMLElement;

  /** ヘッダカラム(固定) */
  fixedHeaderColumns: ColumnData[];

  /** ヘッダカラム(可変) */
  variableColumns: ColumnData[];

  /** データカラム */
  dataRows: { fixedColumns: ColumnData[], variableColumns: ColumnData[] }[];

  constructor(
    element: ElementRef,
    private tableService: TableService
  ) {
    this.el = element.nativeElement;
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.fixedHeaderColumns = this.tableService.createHeaderColumns(this.properties, this.items, true);
    this.variableColumns = this.tableService.createHeaderColumns(this.properties, this.items, false);
    this.dataRows = this.rows.map(row => {
      return {
        fixedColumns: this.tableService.createDataColumns(this.properties, row, true),
        variableColumns: this.tableService.createDataColumns(this.properties, row, false)
      }
    });
    setTimeout(() => {
      let left = 0;
      const headers = this.el.getElementsByClassName('fixed-header');
      if (!headers) { return; }
      Array.from(headers).forEach((item, index) => {
        this.fixedHeaderColumns[index].left = `${left}px`;
        this.dataRows.forEach(r => r.fixedColumns[index].left = `${left}px`);
        left += item.clientWidth;
      });
    }, 100);
  }
}
