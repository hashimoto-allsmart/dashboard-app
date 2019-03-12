import { Component, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { PagerItem } from '../../../models/parts/table/table';
import { BodyRow, HeaderRow } from './../../../models/parts/table/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

  /** ページャ項目 */
  @Input() pagerItem: PagerItem;

  /** ヘッダ行 */
  @Input() headerRow: HeaderRow;

  /** データ行 */
  @Input() dataRows: BodyRow[];

  /** テーブル要素 */
  el: HTMLElement;

  /** 固定カラム位置 */
  fixedColumnPosition = {};

  /**
   * コンストラクタ
   * @param element 要素
   */
  constructor(
    element: ElementRef
  ) {
    this.el = element.nativeElement;
  }

  /**
   * 変更検知
   * @param changes 変更要素
   */
  ngOnChanges(changes: SimpleChanges) {
    // 必須の入力項目が揃っている場合
    if (changes.headerRow && changes.dataRows) {
      this.reload();
    }
  }

  /**
   * リロード
   */
  private reload() {
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
