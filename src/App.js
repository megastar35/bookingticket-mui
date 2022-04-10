import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/loginPage';
import MovieDetailPage from './pages/MovieDetailPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import Testing from './components/Testing'
function App() {
  return (
    <Routes>
      <Route></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/detail/:id" element={<MovieDetailPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/testing" element={<Testing/>}></Route>
    </Routes>
  );
}

export default App;
