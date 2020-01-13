import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';
import { copyToClipboard } from '../Utils/utils';

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = meta => {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)));
    return index => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  }
  return () => false;
};
export const Pre = styled.pre`
  text-align: left;
  margin: rem 0;
  padding: 4rem 2rem 2rem;
  overflow-x: auto;
  border-radius: 0.5rem;

  & .token-line {
    line-height: 2rem;
    height: 2rem;
  }
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 1.4rem;
  position: relative;
  .language-spec,
  .filename {
    position: absolute;
    top: 0;
    left: 2rem;
    padding: 0.5rem 1rem;
    background: var(--yellow);
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0 0 0.5rem 0.5rem;
    text-transform: uppercase;
  }
  .filename {
    top: 0.3rem;
    left: auto;
    background: transparent;
    color: var(--yellow);
    font-size: 1.2rem;
    right: 2rem;
    text-transform: none;
  }
  .highlight-line {
    background: #022b4e;
    margin: 0 -2rem;
    padding: 0 1.5rem;
    border-left: 0.5rem solid var(--cyan);
  }
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2rem;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: 0;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1em;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

const retrieveFilename = metastring => {
  const stringArr = metastring ? metastring.split(' ') : null;
  const filenameItem = stringArr
    ? stringArr.find(item => item.indexOf('filename:') !== -1)
    : null;
  const filename = filenameItem
    ? filenameItem.slice(9, filenameItem.length)
    : null;
  return filename;
};

const Code = ({ codeString, language, metastring }) => {
  const filename = retrieveFilename(metastring);
  const handleClick = () => {
    copyToClipboard(codeString);
  };
  const fileName = metastring && filename ? filename : '';
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <span className="language-spec">{language}</span>
          <span
            style={{ display: fileName ? 'block' : 'none' }}
            className="filename"
          >
            {fileName}
          </span>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div
              {...getLineProps({
                line,
                key: i,
                className: shouldHighlightLine(i) ? 'highlight-line' : '',
              })}
            >
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
