import { Component, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ColumnData, ColumnProperty, HeaderItem, PagerItem } from './../../../models/parts/table';
import { TableService } from '../../../services/parts/table/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

  /** プロパティ */
  @Input() properties: ColumnProperty[];

  /** ヘッダー項目 */
  @Input() items: HeaderItem[];

  /** データ項目 */
  @Input() rows: any[];

  /** ページャ項目 */
  @Input() pagerItem: PagerItem;

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

  /**
   * コンストラクタ
   * @param element 要素
   * @param tableService テーブルサービス
   */
  constructor(
    element: ElementRef,
    private tableService: TableService
  ) {
    this.el = element.nativeElement;
  }

  /**
   * 変更検知
   * @param changes 変更要素
   */
  ngOnChanges(changes: SimpleChanges) {
    // 必須の入力項目が揃っている場合
    if (changes.properties && changes.items && changes.rows) {
      this.init();
    }
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
