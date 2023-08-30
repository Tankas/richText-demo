/*
 * @Author: tanka 
 * @Date: 2023-08-30 14:27:05
 * @LastEditors: tanka 
 * @LastEditTime: 2023-08-30 16:50:24
 * @FilePath: /richText-demo/src/components/EditorManage/embedModule/highLight/index.tsx
 * @Description: 
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

import HighLight from './highLight';
import Quill from 'quill';

class HighLightModule extends Quill.import('blots/embed') {

  static create(prop: any) {
    const { value, type } = prop;
    const node = super.create(prop);
    node.setAttribute('data-value', value);
    node.setAttribute('data-type', type);
    const reactDomElement = (
      <HighLight value={value} type={type} node={node}/>
    );
    const root = createRoot(node);
    root.render(reactDomElement);
    return node;
  }

  static value(node: any) {
    // 数据保存
    const value = node.getAttribute('data-value');
    const type = node.getAttribute('data-type');
    return { value, type };
  }
}
HighLightModule.blotName = 'highLightModule';
HighLightModule.tagName = 'span';
HighLightModule.className = 'highLightModule';

export default HighLightModule;