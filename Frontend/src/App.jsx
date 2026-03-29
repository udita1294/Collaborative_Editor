import React from 'react'
import { Editor } from '@monaco-editor/react'

const App = () => {
  return (
    <main className='h-screen w-full bg-gray-950 flex gap-4 p-4'>

      <aside className='h-full w-1/4 bg-amber-50 rounded-lg'></aside>

      <section className='w-3/4 overflow-hidden bg-neutral-800 rounded-lg pt-0.5'>
        <Editor
          height="100%"
          language="javascript"
          theme="vs-dark"
          defaultValue="// Write your code here..."
        />
      </section>

      
    </main>
  )
}

export default App
