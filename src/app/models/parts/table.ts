import { objectCopy } from '../../utils/utils';
import { CELL_TYPE } from '../../constants/parts/table';

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

/** カラムデータ */
export class ColumnData {

  private _key: string;

  private _value: string;

  private _isFixed: boolean;

  constructor(property: ColumnProperty, data: any, isHeader?: boolean) {
    this._key = property.path;
    this._value = (!isHeader) ? this.getJsonValue(this.key, data) : data;
    this._isFixed = property.isFixed;
  }

  /** キー */
  get key() { return this._key; }

  /** 値 */
  get value() { return this._value; }

  /** 固定表示要否 */
  get isFixed() { return this._isFixed; }

  /**
   * Json設定値取得
   * @param path jsonパス
   * @param object jsonオブジェクト
   * @return 指定されたパスに設定されている値
   */
  private getJsonValue(path: string, object: any) { return this.getObjectValue(path.split('.'), object) }

  /**
   * オブジェクト設定値取得
   * @param paths パスリスト
   * @param object オブジェクト
   * @return 指定されたパスに設定されている値
   */
  private getObjectValue(paths: string[], object: any) {
    // パスリストが無いかオブジェクトがundefined or nullの場合は終了
    if (paths.length === 0 || !object) { return object }
    // 先頭のパスを取得
    const path = paths.shift();
    // リストのパスかどうかを取得
    const isArrayPath = this.isArrayPath(path);
    // リストの場合はそれ以外の場合でそれぞれデータを取得
    return (!isArrayPath.isArray) ? this.getObjectValue(paths, object[path]) : this.getArrayValue(paths, isArrayPath.param, object[isArrayPath.path]);
  }

  /**
   * 配列設定値取得
   * @param paths パスリスト
   * @param param インデックス or []
   * @param object 配列オブジェクト
   * @return 指定されたパスに設定されている値
   */
  private getArrayValue(paths: string[], param: string, object: Array<any>) {
    // All指定以外はindexのデータを取得して返却
    if (param !== '[]') { return this.getObjectValue(paths, object[Number(param)]); }
    // 取得したデータを改行文字で連結して返却
    const values = object.map(_ => this.getObjectValue(objectCopy(paths), _));
    return values.join('\n');
  }

  /**
   * リストパスチェック
   * @param path パス
   * @return リストパスチェック結果
   */
  private isArrayPath(path: string): { isArray: boolean, path?: string, param?: string } {
    const param = path.split(':');
    return (param.length === 1) ? { isArray: false } : { isArray: true, path: param[0], param: param[1] };
  }
}
