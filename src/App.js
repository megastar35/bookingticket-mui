import { Route,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/loginPage';
import MovieDetailPage from './pages/MovieDetailPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
   <Routes>
     
     <Route path="/login" element={<LoginPage/>}></Route>
     <Route path="/" element={<HomePage/>}></Route>
     <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/detail/:id" element={<MovieDetailPage/>}></Route>
   </Routes>  
  );
}

export default App;
