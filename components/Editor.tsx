import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';

const Editor: React.FC = () => {
  const divEl = useRef<HTMLDivElement>(null);
  let editor: monaco.editor.IStandaloneCodeEditor;
  useEffect(() => {
    if (divEl.current) {
      editor = monaco.editor.create(divEl.current, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
          '\n'
        ),
        language: 'typescript',
      });
    }
    return () => {
      editor?.dispose();
    };
  }, []);
  return <div className="Editor" ref={divEl} style={{ height: '500px' }}></div>;
};

export default Editor;
