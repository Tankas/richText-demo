/*
 * @Author: tanka 
 * @Date: 2023-08-30 10:33:32
 * @LastEditors: tanka 
 * @LastEditTime: 2023-08-30 16:58:47
 * @FilePath: /richText-demo/src/pages/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { Col, Row, Button } from 'antd';

import Editor from '@/components/Editor'
import RegisterQuill from '@/components/EditorManage/utils/registerQuill';

import Quill from 'quill';


RegisterQuill.register();



const HomePage: React.FC = () => {
  const leftEditorInstanceRef = useRef<any>();
  const rightEditorInstanceRef = useRef<any>();

  const [ aiContent, setAiContent ] = useState<any>(null);

  const completedLeft = (editorInstance: any) => {
    leftEditorInstanceRef.current = editorInstance
  }

  const completedRight = (editorInstance: any) => {
    rightEditorInstanceRef.current = editorInstance
  }

  const getAiContent = () => {
    const data = {
      ops: [
        {
          insert: 'start\n',
        },
        {
          insert: {
            highLightModule: {
              type: 1,
              value: '我是高亮'
            }
          }
        },
        {
          insert: ' end\n',
        }
      ]
    }
    return JSON.stringify(data);
  }

  const transform = () => {
    const content = leftEditorInstanceRef.current.getContents();
    const contentStr = JSON.stringify(content);
    // content 传给后端的数据
    console.error('传给后端的数据')
    console.log(content)
    // dataStr 转换后的数据
    const dataStr = getAiContent()
    setAiContent(dataStr)
  }

  const saveData = () => {
    const quill = rightEditorInstanceRef.current;
    console.log(quill.getContents())
  }

  return (
    <PageContainer ghost>
      <Row>
        <Col span={8}>
          <p>学个小作文</p>
          <Editor completed={completedLeft} id={'digua-1'} ></Editor>
          <Button type="primary" onClick={transform} >AI转换</Button>
        </Col>
        <Col span={8}>
          <p>AI文本生成</p>
          {
            aiContent ? 
            <Editor content={aiContent} completed={completedRight} id={'digua-2'} ></Editor> : null
          }
          {
            aiContent ? <Button type="primary" onClick={saveData} >查看保存数据</Button> : null
          }
        </Col>
        <Col span={8}>
          哈哈哈
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
