import styles from "./App.module.css";

import Login from "./components/Login/Login.jsx";
import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home.jsx";

function App() {

  return (
  <div>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/home" element={<Home />} />
     </Routes>
  </div>
   
  );
}



export default App;