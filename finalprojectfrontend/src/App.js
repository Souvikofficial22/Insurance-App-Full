import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AdminLogin from './Components/LoginPage/AdminLogin/AdminLogin';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/loginpage/admin" element={<AdminLogin />} />
      </Routes>
      
    </div>
  );
}

export default App;
