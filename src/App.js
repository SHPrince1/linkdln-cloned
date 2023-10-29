
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/index';

function App() {
  return (
    <div className="App">
     
      {/* <Index /> */}


      <Router>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/skills" exact element={<About />} />
          <Route path="/project" element={<Project />} /> */}
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
