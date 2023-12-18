
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/index';
import Network from './pages/network';
import Notification from './pages/notification';
import Jobs from './pages/jobs';
import Post from './pages/post';

function App() {
  return (
    <div className="App">
     
      {/* <Index /> */}


      <Router>
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/network" exact element={<Network />} />
          <Route path="/notification" element={<Notification />} /> 
          <Route path="/jobs" exact element={<Jobs />} />
          <Route path="/post" element={<Post />} /> 
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
