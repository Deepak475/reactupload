import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<h1>Welcome to services</h1>} />
        <Route path='/portfolio' element={<h1>Welcome to portfolio</h1>} />
        <Route path='/about' element={<h1>Welcome to about</h1>} />
        <Route path='/contact' element={<h1>Welcome to contact</h1>} />
      </Routes>
    </>
  );
}

export default App;
