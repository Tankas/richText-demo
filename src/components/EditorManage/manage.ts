/*
 * @Author: tanka 
 * @Date: 2023-08-30 11:03:58
 * @LastEditors: tanka 
 * @LastEditTime: 2023-08-30 11:08:05
 * @FilePath: /richText-demo/src/components/EditorManage/manage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

class Manage {
  public list: any[] = [];
  private id = 1; // 每个文本的唯一id
  private idPrefix = 'xiaodigua';

  constructor() {
    this.idPrefix = `xiaodigua-${new Date().getTime()}`;
  }

  add() {
    const editorItem = {
      id: `${this.idPrefix}-${this.id++}`,
    }
  }
}

export default Manage;