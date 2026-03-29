import React from 'react'
import { Editor } from '@monaco-editor/react'
import { MonacoBinding } from 'y-monaco'
import { useRef ,useMemo } from 'react'
import * as Y from 'yjs'
import { SocketIOProvider } from 'y-socket.io';

const App = () => {

  const editorRef = useRef(null);
  const  yDoc = useMemo(() => new Y.Doc(), []);
  const yText = useMemo(() => yDoc.getText('monaco'), [yDoc]);

  const HandleMount = (editor) => {
    editorRef.current = editor;

    const provider = new SocketIOProvider('http://localhost:3000', 'monaco', yDoc, {autoConnect: true});
    const monacoBinding = new MonacoBinding(
      yText,
      editorRef.current.getModel(), 
      new Set([editorRef.current]), 
      provider.awareness
    );
  }

  return (
    <main className='h-screen w-full bg-gray-950 flex gap-4 p-4'>

      <aside className='h-full w-1/4 bg-amber-50 rounded-lg'></aside>

      <section className='w-3/4 overflow-hidden bg-neutral-800 rounded-lg pt-0.5'>
        <Editor
          height="100%"
          language="javascript"
          theme="vs-dark"
          defaultValue="// Write your code here..."
          onMount={HandleMount}
        />
      </section>

      
    </main>
  )
}

export default App
