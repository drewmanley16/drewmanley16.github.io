import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Coding from './Pages/Coding';
import About from './Pages/about';
import NoPage from './Pages/NoPage';
import Consulting from './Pages/Consulting';
import Resume from './Pages/Resume';
import ProfessionalBio from './Pages/Professional-bio';

function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/coding":
      component = <Coding />
      break
    case "/consulting":
      component = <Consulting />
      break
  }
  return <div className="App">
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/professional-bio" element={<ProfessionalBio />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </div>
</div>;
}

export default App;
