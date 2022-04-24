import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Search from './routes/Search';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
