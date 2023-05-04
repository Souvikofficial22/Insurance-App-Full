import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AdminLogin from './Components/LoginPage/AdminLogin/AdminLogin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import EmployeeLogin from './Components/LoginPage/EmployeeLogin/EmployeeLogin';
import EmployeeDashboard from './Components/EmployeeDashboard/EmployeeDashboard';
import InsurancePlan from './Components/AdminDashboard/AddInsurance/InsurancePlan';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/loginpage/admin" element={<AdminLogin />} />
        <Route exact path="/admindashboard/:username/:role" element={<AdminDashboard />} />

        <Route exact path="/loginpage/employee" element={<EmployeeLogin />} />
        <Route exact path="/employeedashboard/:username/:role" element={<EmployeeDashboard />} />

        <Route exact path="/test" element={<InsurancePlan />} />
      </Routes>
      
    </div>
  );
}

export default App;
