/*
 * @Author: tanka 
 * @Date: 2023-08-30 11:03:39
 * @LastEditors: tanka 
 * @LastEditTime: 2023-08-30 14:35:21
 * @FilePath: /richText-demo/src/components/EditorManage/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { useEffect, useState } from 'react';
import Manage from './manage';
import Editor from '../Editor'
import RegisterQuill from './utils/registerQuill';

RegisterQuill.register();

export type IProps = {

};

const EditorManage: React.FC<IProps> = (props: any) => {
  return (
    <>
      <Editor
        id={'digua-1'}
      ></Editor>
    </>
  )
}

export default EditorManage;