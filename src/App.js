import './App.css';
import Uploader from './Uploader';
import Files from './Files';

function App() {
  return (
    <div className="App">
      <Files />
      <div className='uploader-container-app h-screen flex justify-center items-center'>
        <Uploader />
      </div>
    </div>
  );
}

export default App;
