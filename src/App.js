import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Authentication from './components/Authentication';
import Dashboard from './pages/Dashboard';

function App() {
  return (
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/login'element={<Authentication/>}/>
    <Route path='/register'element={<Authentication register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
  );
}

export default App;
