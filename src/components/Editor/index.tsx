/*
 * @Author: tanka 
 * @Date: 2023-08-30 10:56:02
 * @LastEditors: tanka 
 * @LastEditTime: 2023-08-30 17:01:55
 * @FilePath: /richText-demo/src/components/Editor/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';
import Quill from 'quill';



export type IProps = {
  content?: any; // 文本内容
  id: string; // 唯一id
  completed?: (editorInstance: any) => void;
};


const Editor: React.FC<IProps> = (props) => {
  const { id, content } = props;
  const quillRef = useRef<any>();
  /**
   * 生成文本实例
   */
  const initQuillInstance = () => {
    const options = {
      theme: 'snow',
      modules: {
        // toolbar: null,
        toolbar: '#toolbar'
      },
      placeholder: '输入文本',
    };
    const instance = new Quill(`#${id}`, options);
    // 默认字体设置18px
    instance.format('size', '18px');
    // 默认设置字体颜色
    instance.format('color', '#000000');
    quillRef.current = instance;
    quillRef.current.focus();
    window.hh = instance;
  };

  const insetSettingPropertyModule = () => {
    const quill: any = quillRef.current;
    const range = quill.getSelection();
    if (range) {
      const cursorIndex = range.index;
      quill.insertEmbed(cursorIndex, 'highLightModule', {
        value: '我是谁',
        type: 1
      });
      quill.setSelection(cursorIndex + 1);
    }
  };


  /**
   * 数据回显
   */
  const recoverContent = (quill: any, content: string) => {
    if (!content) {
      return;
    }
    try {
      console.log('后端返回转换后的数据');
      console.log(JSON.parse(content))
      quill.setContents(JSON.parse(content));
    } catch (err) {
      console.warn('父文本数据格式有误');
    }
  };

  // useEffect(() => {
  //   recoverContent(quillRef.current, content)
  // }, [content])

  const componentDidMounted = () => {
    // 初始化实例
    initQuillInstance();
    //
    const quill: any = quillRef.current;
    if (props.completed) {
      props.completed(quill);
    }
    // 数据回显
    recoverContent(quill, content);
    // test
    if (!content) {
      // insetSettingPropertyModule();
    }
  }

  const removeDocumentListener = () => {
    
  }

  useEffect(() => {
    componentDidMounted();
    return () => {
      removeDocumentListener();
    };
  }, []);

  return (
    <>
      <div className={'sss'}>
        <div id="toolbar">
          <button className="ql-bold">Bold</button>
          <button className="ql-italic">Italic</button>
        </div>
        <div
          id={id}
          className={styles.editor}
        >

        </div>
      </div>
    </>
  )

}


export default Editor;
