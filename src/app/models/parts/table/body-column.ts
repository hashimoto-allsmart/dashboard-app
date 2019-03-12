import { ColumnDataBase } from './column-data-base';

export class BodyColumn extends ColumnDataBase {

  /**
   * コンストラクタ
   * @param path Jsonパス
   * @param data Jsonデータ
   * @param isFixed 固定表示要非
   */
  constructor(path: string, data: any, isFixed?: boolean) {
    super(path, data, isFixed);
  }

  getValue(path: string, data: any): string {
    return this.getJsonValue(path, data);
  }
}