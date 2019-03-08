/**
 * オブジェクトコピー
 * @param object オブジェクト
 * @param replacer 変換ロジック
 * @return コピーしたオブジェクト
 */
export function objectCopy<T>(object: T, replacer?: (key: string, value: T) => T): T {
  // 指定されたオブジェクトが未設定か空の場合は空オブジェクトを返却
  if (!object || Object.keys(object).length === 0) { return object; }
  return JSON.parse(JSON.stringify(object, replacer));
}
