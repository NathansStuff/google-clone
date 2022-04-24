import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
