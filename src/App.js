import { Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/loginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
   <Routes>
     <Route path="/login" element={<LoginPage/>}></Route>
     <Route path="/home" element={<HomePage/>}></Route>
     <Route path="/" element={<RegisterPage/>}></Route>

   </Routes>  
  );
}

export default App;
