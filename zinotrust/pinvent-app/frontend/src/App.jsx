import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/auth/Login';
import Forgot from './pages/auth/Forgot';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import { getLoginStatus } from './services/authService';
import Reset from './pages/auth/Reset';

axios.defaults.withCredentials = true;
export const SERVER_URL = 'http://localhost:5000';

function App() {
  const dispatch = useDispatch();
  //check if user is logged in
  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route
          path="/resetpassword/:resetToken"
          element={<Reset />}
        />

        <Route
          path="dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
