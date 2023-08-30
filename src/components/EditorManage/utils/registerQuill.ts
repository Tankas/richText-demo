/*
 * @Author: tanka 
 * @Date: 2023-08-30 11:10:02
 * @LastEditors: tanka 
 * @LastEditTime: 2023-08-30 16:51:04
 * @FilePath: /richText-demo/src/components/EditorManage/utils/registerQuill.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import HighLightModule from "../embedModule/highLight";
import Quill from 'quill';

class RegisterQuill {
  static register() {
    RegisterQuill.registerLineHightModule();
  }

  static registerLineHightModule() {
    Quill.register(HighLightModule, true);
  }

}

export default RegisterQuill;