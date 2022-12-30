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
import AddProduct from './pages/addProduct/AddProduct';
import ProductDetail from './components/product/productDetail/ProductDetail';
import EditProduct from './pages/editProduct/EditProduct';
import Profile from './pages/profile/Profile';
import ProfileUpdate from './pages/profile/ProfileUpdate';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notFound/NotFound';

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

        <Route
          path="add-product"
          element={
            <Sidebar>
              <Layout>
                <AddProduct />
              </Layout>
            </Sidebar>
          }
        />

        <Route
          path="/product-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <ProductDetail />
              </Layout>
            </Sidebar>
          }
        />

        <Route
          path="/edit-product/:id"
          element={
            <Sidebar>
              <Layout>
                <EditProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout>
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile-update"
          element={
            <Sidebar>
              <Layout>
                <ProfileUpdate />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Sidebar>
              <Layout>
                <Contact />
              </Layout>
            </Sidebar>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
