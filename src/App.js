import './App.css';
import Uploader from './Uploader';
import Files from './Files';

function App() {
  return (
    <div className="App">
      <Files />
      <div className='uploader-container-app flex justify-center items-center h-screen'>
        <Uploader />
      </div>
    </div>
  );
}

export default App;
