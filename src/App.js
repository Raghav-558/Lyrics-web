import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/:id' element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;