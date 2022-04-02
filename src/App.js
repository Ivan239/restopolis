import './App.css';
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Order from './pages/Order/Order';
import Book from './pages/Book/Book';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import store from './redux/store/store';
import { newAccount } from './redux/account/actions';
import { uploadCart } from './redux/cart/actions';

function App() {
  store.dispatch(newAccount(JSON.parse(localStorage.getItem('account')) || {}));
  store.dispatch(uploadCart(JSON.parse(localStorage.getItem('cart')) || []));
  store.subscribe(() => {
    localStorage.setItem('account',
      JSON.stringify(store.getState().account));
    localStorage.setItem('cart',
      JSON.stringify(store.getState().cart));
  })
  console.log(store.getState())
  return (
    <div className="app">
      <BrowserRouter >
        <Header />
        <div className='content'>
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
    </div>
  );
}

export default App;
