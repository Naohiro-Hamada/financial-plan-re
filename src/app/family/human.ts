/**
 * relationship のステータスは下記の通り：
 * 0: 夫
 * 1: 妻
 * 2: 子
 * 9: 親
 */
export interface Human {
  name: string;
  relationship: string;
  birthday: Date;
}
