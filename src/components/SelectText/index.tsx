import React, { useState, useMemo, useCallback } from 'react';
import './index.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { article, btns } from './data';

interface Select {
  startIdx: number;
  endIdx: number;
  text: string;
}

interface Flags extends Select {
  variant: string;
  codeNum: number;
  type: string;
}

function SelectText() {
  const [arti, setArti] = useState(article);
  const [fontsize, setFontsize] = useState(20);
  const select = useMemo(() => ({ startIdx: -1, endIdx: -1 } as Select), []);
  const flags = useMemo(() => [] as Flags[], []);
  const showAns = useCallback(() => alert(JSON.stringify(flags, ['startIdx', 'endIdx', 'text', 'type'], 2)), []);

  const isCover = useCallback(() => {
    return flags.findIndex((flag: Flags) => {
      if (
        (select.startIdx >= flag.startIdx && select.startIdx <= flag.endIdx) ||
        (select.endIdx >= flag.startIdx && select.endIdx <= flag.endIdx) ||
        (select.startIdx >= flag.startIdx && select.endIdx <= flag.endIdx) ||
        (select.startIdx <= flag.startIdx && select.endIdx >= flag.endIdx)
      ) {
        return true;
      }
      return false;
    });
  }, []);

  const selectHandler = useCallback(() => {
    const selection: any = window.getSelection();
    const { isCollapsed, anchorOffset, focusOffset } = selection;
    if (isCollapsed) return;
    select.startIdx = Math.min(focusOffset, anchorOffset);
    select.endIdx = Math.max(focusOffset, anchorOffset);
    select.text = selection.toString();
  }, []);

  const clickHandler = useCallback((variant: string, type: string) => {
    if (select.startIdx === -1 || select.endIdx === -1 || isCover() !== -1) return;
    const overWordsNum = flags.reduce((num: number, flag: Flags) => {
      if (flag.endIdx < select.startIdx) {
        return num + flag.codeNum;
      }
      return num;
    }, 0);
    const startIdx = select.startIdx + overWordsNum;
    const endIdx = select.endIdx + overWordsNum;
    setArti((prev) => {
      let state = prev;
      state = `${state.slice(0, endIdx)}</span>${state.slice(endIdx)}`;
      state = `${state.slice(0, startIdx)}<span class="text-${variant}"><span class="type">${type}</span>${state.slice(
        startIdx,
      )}`;
      return state;
    });
    flags.push({
      ...select,
      variant,
      type,
      codeNum: '<span class="text-"></span><span class="type"></span>'.length + variant.length + type.length,
    });
    select.startIdx = -1;
    select.endIdx = -1;
  }, []);

  return (
    <div className="select-text">
      <div className="header">
        {btns.map(({ variant, text }: any) => (
          <Button variant={variant} key={variant} size="sm" onClick={() => clickHandler(variant, text)}>
            {text}
          </Button>
        ))}
      </div>
      <div className="tools">
        <div className="tools-left">
          字体:&nbsp;
          <Form.Control
            className="tools-fontsize-select"
            as="select"
            custom
            size="sm"
            defaultValue={fontsize}
            onChange={(e) => setFontsize(Number(e.currentTarget.value))}
          >
            {new Array(8)
              .fill(0)
              .map((item, idx) => item + idx)
              .map((item) => (
                <option value={item + 16} key={item}>
                  {item + 16}
                </option>
              ))}
          </Form.Control>
        </div>
        <div className="tools-right">
          <b className="rule text-primary">规则文件预览</b>
          <Form.Control className="tools-mode-select" as="select" custom size="sm" defaultValue="mode1">
            <option value="mode1">模型1</option>
            <option value="mode2">模型2</option>
            <option value="mode3">模型3</option>
          </Form.Control>
          <span className="mode">运行模型</span>
        </div>
      </div>
      <div className="main" style={{ fontSize: `${fontsize}px` }}>
        <div className="main-origin" dangerouslySetInnerHTML={{ __html: arti }} />
        <div className="main-cover" onSelect={selectHandler} contentEditable="true">
          {article.replace(/<\/?span>/g, '')}
        </div>
      </div>
      <div className="footer">
        <Button variant="outline-secondary" size="sm" onClick={showAns}>
          保存
        </Button>
        &nbsp;&nbsp;
        <Button variant="primary" size="sm" onClick={showAns}>
          提交
        </Button>
      </div>
    </div>
  );
}

export default SelectText;
