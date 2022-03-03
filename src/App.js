import './App.css';
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Delivery from './pages/Delivery/Delivery';
import Book from './pages/Book/Book';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Header />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/book" element={<Book />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
