import './App.css';
import Home from './routes/Home/Home';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Shop from './routes/Shop/Shop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

