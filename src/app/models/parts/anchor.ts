export interface AncorItem {
  key: string;    // アンカーを識別するためのキー
  title: string;  // アンカーに表示させるタイトル
  icon?: string;  // アイコン付きのアンカーにしたい場合に指定
  css?: string;   // クラスを指定したい場合に利用
}