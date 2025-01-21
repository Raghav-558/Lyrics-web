
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;