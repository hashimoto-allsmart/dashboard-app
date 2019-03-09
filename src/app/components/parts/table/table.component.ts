import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ColumnData, ColumnProperty, HeaderItem } from './../../../models/parts/table';
import { TableService } from '../../../services/parts/table/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  /** プロパティ */
  @Input() properties: ColumnProperty[];

  /** ヘッダー項目 */
  @Input() items: HeaderItem[];

  /** データ項目 */
  @Input() rows: any[];

  /** テーブル要素 */
  el: HTMLElement;

  /** ヘッダカラム(固定) */
  fixedHeaderColumns: ColumnData[];

  /** ヘッダカラム(可変) */
  variableHeaderColumns: ColumnData[];

  /** データカラム */
  dataRows: { fixedColumns: ColumnData[], variableColumns: ColumnData[] }[];

  /** 固定カラム位置 */
  fixedColumnPosition = {};

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
    this.variableHeaderColumns = this.tableService.createHeaderColumns(this.properties, this.items, false);
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
        this.fixedColumnPosition[index] = `${left}px`;
        left += item.clientWidth;
      });
    }, 100);
  }
}
