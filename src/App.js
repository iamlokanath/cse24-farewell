import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Thankyou from './components/Thankyou';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
