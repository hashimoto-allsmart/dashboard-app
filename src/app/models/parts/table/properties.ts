import { CELL_TYPE } from '../../../constants/parts/table';

/** ヘッダ表示用アイテム */
export interface HeaderItem {
  itemCode: string;
  value: string;
}

/** カラムプロパティ */
export interface ColumnProperty {
  // パラメータ設定値取得          aaa.bbb.ccc
  // 全配列の設定値取得（改行連結） aaa.bbb.ccc:[].ddd.eee
  // 配列の指定インデックスの値取得 aaa.bbb.ccc:0.ddd.eee
  path?: string;       // Jsonパス(データ行表示用)
  itemCode?: string;   // 項目コード(ヘッダ行表示用)
  isFixed?: boolean;   // テーブルに固定表示する場合に指定
  type?: CELL_TYPE;    // セル種別
  cellInfo?: CellInfo; // セル情報
}

/** セル情報 */
export interface CellInfo {
  iconClass?: string;               // アイコンのクラス名(アイコンの場合は必須)
  condition?: CellDisplayCondition; // セル表示条件(表示条件がある場合は必須)
}

/** セルの表示条件 */
export interface CellDisplayCondition {
  path?: string;                   // 条件に使用するデータのパス(表示条件がある場合は必須)
  value?: any;                     // 条件に使用するデータの値(表示条件がある場合は必須。この値と一致する場合はセルを表示する。)
}
