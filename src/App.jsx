import styles from "./App.module.css";

import Login from "./components/Login/Login.jsx";
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup.jsx";
import Home from "./components/Home/Home.jsx";
import ProtectedRoute from "./components/Protectedroute.jsx";
function App() {

  return (
  <div>
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  </div>
   
  );
}



export default App;