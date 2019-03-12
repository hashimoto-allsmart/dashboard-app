import { objectCopy } from 'src/app/utils/utils';

/** カラムデータ */
export abstract class ColumnDataBase {

  private _key: string;

  private _value: string;

  private _isFixed: boolean;

  /**
   * コンストラクタ
   * @param key キー
   * @param data データ
   * @param isFixed 固定表示要非
   */
  constructor(key: string, data: any, isFixed?: boolean) {
    this._key = key;
    this._value = this.getValue(key, data);
    this._isFixed = isFixed;
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
  protected getJsonValue(path: string, object: any) { return this.getObjectValue(path.split('.'), object) }

  /**
   * オブジェクト設定値取得
   * @param paths パスリスト
   * @param object オブジェクト
   * @return 指定されたパスに設定されている値
   */
  protected getObjectValue(paths: string[], object: any) {
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
  protected getArrayValue(paths: string[], param: string, object: Array<any>) {
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
  protected isArrayPath(path: string): { isArray: boolean, path?: string, param?: string } {
    const param = path.split(':');
    return (param.length === 1) ? { isArray: false } : { isArray: true, path: param[0], param: param[1] };
  }

  /**
   * 表示値取得
   * @param key キー
   * @param data データ
   * @return 表示値
   */
  abstract getValue(key: string, data: any): string;
}
