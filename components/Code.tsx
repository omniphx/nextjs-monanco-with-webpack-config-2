import Editor from '@monaco-editor/react';

import loader from '@monaco-editor/loader';
import { useEffect } from 'react';
import * as monaco from 'monaco-editor';

loader.config({ monaco });

const Code = () => {
  useEffect(() => {
    loader.init().then((monaco) => {
      console.log('Here is the monaco instance', monaco);
    });
  });

  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// let's write some broken code 😈"
    />
  );
};

export default Code;
