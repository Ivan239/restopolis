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

function App() {
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
