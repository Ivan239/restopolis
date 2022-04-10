import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styles from './App.module.css';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Order from './pages/Order/Order';
import Book from './pages/Book/Book';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import store from './redux/store/store';
import { newAccount } from './redux/account/actions';
import { uploadCart } from './redux/cart/actions';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  store.dispatch(newAccount(JSON.parse(localStorage.getItem('account')) || {}));
  store.dispatch(uploadCart(JSON.parse(localStorage.getItem('cart')) || []));
  store.subscribe(() => {
    localStorage.setItem(
      'account',
      JSON.stringify(store.getState().account),
    );
    localStorage.setItem(
      'cart',
      JSON.stringify(store.getState().cart),
    );
  });
  return (
    <div className={styles.app}>
      <BrowserRouter basename="/restopolis">
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/order" element={<Order />} />
            <Route path="/book" element={<Book />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2600}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
