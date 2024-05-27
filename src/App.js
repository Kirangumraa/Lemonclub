
import './App.css';
import Bundle from './component/Bundle';
import Bundle2 from './component/Bundle2';
import Bundle3 from './component/Bundle3';
import Home from './component/Home';
import Residential from './component/Residential';
import Static from './component/Static';
import Hybrid from './component/Hybrid';
import Program from './component/Program';
import Loyality from './component/Loyality';
import ProgramAffi from './component/program_affi';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/programaffi' element={<ProgramAffi />} />
        <Route path='/residential' element={<Residential />} />
        <Route path='/static' element={<Static />} />
        <Route path='/bundle' element={<Bundle />} />
        <Route path='/hybrid' element={<Hybrid />} />
        <Route path='/bundle2' element={<Bundle2 />} />
        <Route path='/bundle3' element={<Bundle3 />} />
        <Route path='/program' element={<Program />} />
        <Route path='/loyality' element={<Loyality />} />
      </Routes>
    </div>
  );
}

export default App;

