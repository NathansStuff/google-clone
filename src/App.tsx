import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
