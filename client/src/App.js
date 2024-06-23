import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
