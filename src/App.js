import './App.css';
import Sidebar from './components/Sidebar.js';
import Tutorial from './components/Tutorial.js';
import Home from './pages/Home.js';
import PocketGuide from './pages/PocketGuide.js';
import Examples from './pages/Examples.js';
import { alphabet, numbers } from './util/constants.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Sidebar />
      <div className="header">
        <h1>ASL Pocket Guide</h1>
      </div>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/pocket-guide' element={<PocketGuide />}/>
          <Route exact path='/examples' element={<Examples />}/>
          {
            alphabet.map(letter =>
              <Route exact path={`/pocket-guide/${letter}`} element={<Tutorial alphanumeric={letter} />}/>
            )
          }
          {
            numbers.map(number =>
              <Route exact path={`/pocket-guide/${number}`} element={<Tutorial alphanumeric={number} />}/>
            )
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;
