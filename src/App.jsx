import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mountains from './pages/Mountains';
import MountainDetail from './pages/MountainsDetail';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AboutMe from './pages/AboutMe';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mountains' element={<Mountains />} />
      <Route path='/mountains/:id' element={<MountainDetail />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/aboutme' element={<AboutMe />} />
      <Route
        path='/user'
        element={
          <ProtectedRoute element={<UserProfile />} />
        }
      />
    </Routes>
  );
}

export default App;
