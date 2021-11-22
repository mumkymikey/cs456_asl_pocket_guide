import './App.css';
import Sidebar from './components/Sidebar.js';
import Home from './pages/Home.js';
import PocketGuide from './pages/PocketGuide.js';
import Watermelons from './pages/Watermelons.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Sidebar />
      <div className="header">
        <h1>Monkey App</h1>
      </div>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/pocket-guide' element={<PocketGuide/>}/>
          <Route exact path='/watermelons' element={<Watermelons/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
