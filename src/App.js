import './App.css';
import Uploader from './Uploader';
import Files from './Files';
import { Provider } from 'react-redux';
import store from './store';
import getFilesLocally from './getFilesLocally';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <getFilesLocally />
        <Files />
        <div className='uploader-container-app flex justify-center items-center h-screen'>
          <Uploader />
        </div>
      </div>
    </Provider>
  );
}

export default App;
