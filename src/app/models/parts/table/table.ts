import { BodyColumn } from './body-column';
import { HeaderColumn } from './header-column';

/** ページング項目 */
export interface PagerItem {
  total: number;
  from: number;
  count: number;
  displayCount: number[];
}

/** ヘッダーエリア */
export interface HeaderRow {
  fixedColumns?: HeaderColumn[];
  variableColumns?: HeaderColumn[];
}

/** データエリア */
export interface BodyRow {
  fixedColumns?: BodyColumn[];
  variableColumns?: BodyColumn[];
}
