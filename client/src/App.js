import './App.css';
import Uploader from './Uploader';
import Files from './Files';
import { Provider } from 'react-redux';
import store from './store';
import LocalFileHandler from './LocalFileHandler';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Provider store={store}>
      <div className="App h-screen">
        <Toaster />
        <LocalFileHandler />
        <Files />
        <div className='uploader-container-app flex justify-center items-center h-full'>
          <Uploader />
        </div>
      </div>
    </Provider>
  );
}

export default App;
