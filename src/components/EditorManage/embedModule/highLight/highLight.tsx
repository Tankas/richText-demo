/*
 * @Author: tanka 
 * @Date: 2023-08-30 14:27:55
 * @LastEditors: tanka 
 * @LastEditTime: 2023-08-30 16:45:47
 * @FilePath: /richText-demo/src/components/EditorManage/embedModule/highLight/highLight.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect, useRef } from 'react';
import style from './highLight.less';
import { Button, message, Popconfirm } from 'antd';

export type IProps = {
  value: string;
  type: any;
  node: any;
};

const HighLight: React.FC<IProps> = (props: any) => {
  const { value, node } = props;

  const [ showValue, setShowValue ] =  useState(value);

  useEffect(() => {
    // node.setAttribute('data-value', '我改变了');
  }, []);

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    const newValue = '我被翻译了'
    node.setAttribute('data-value', newValue);
    setShowValue(newValue)
  };
  
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
  };

  return (
    <>
      <span className={style.highLight}>
        <Popconfirm
          title="测试"
          description=""
          onConfirm={confirm}
          onCancel={cancel}
          okText="翻译"
          cancelText="取消"
        >
          {showValue}
        </Popconfirm>
      </span>
    </>
  );
};

export default HighLight;
