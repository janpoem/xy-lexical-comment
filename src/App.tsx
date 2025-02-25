import './App.css';
import { Editor } from './Editor';

function App() {

  return (
    <>
      <div className={'editor-shell'}>
        <Editor content={'# Hello, World!'} />
      </div>
    </>
  );
}

export default App;
