import './App.css';
import { Route, Routes } from "react-router";
import Home from './Home';
import View from './View';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/view' element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
