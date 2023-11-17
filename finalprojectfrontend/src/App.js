import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AdminLogin from './Components/LoginPage/AdminLogin/AdminLogin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import EmployeeLogin from './Components/LoginPage/EmployeeLogin/EmployeeLogin';
import EmployeeDashboard from './Components/EmployeeDashboard/EmployeeDashboard';
import InsurancePlan from './Components/AdminDashboard/AddInsurance/InsurancePlan';
import ViewInsurance from './Components/AdminDashboard/ViewInsurance/ViewInsurance';
import UpdateInsurance from './Components/AdminDashboard/UpdateInsurance/UpdateInsurance';
import AddPolicy from './Components/AdminDashboard/AddScheme/AddPolicy';
import ViewScheme from './Components/AdminDashboard/ViewScheme/ViewScheme';
import AddState from './Components/AdminDashboard/AddState/AddState';
import ViewState from './Components/AdminDashboard/ViewState/ViewState';
import AddCity from './Components/AdminDashboard/AddCity/AddCity';
import ViewCity from './Components/AdminDashboard/ViewCity/ViewCity';
import AddEmployee from './Components/AdminDashboard/AddEmployee/AddEmployee';
import ViewEmployee from './Components/AdminDashboard/ViewEmployee/ViewEmployee';
import AddAgent from './Components/AdminDashboard/AddAgent/AddAgent';
import ViewAgent from './Components/AdminDashboard/ViewAgent/ViewAgent';
import ViewCustomer from './Components/AdminDashboard/ViewCustomer/ViewCustomer';
import ViewPolicies from './Components/Layouts/ViewPolicies/ViewPolicies';
import PolicyDetails from './Components/Layouts/ViewPolicies/PolicyDetails/PolicyDetails';
import UserRegistration from './Components/HomePage/UserRegistration/UserRegistration';
import CustomerLogin from './Components/LoginPage/CustomerLogin/CustomerLogin';
import AgentLogin from './Components/LoginPage/AgentLogin/AgentLogin';
import ViewPolicyDetails from './Components/AdminDashboard/ViewPolicyDetails/ViewPolicyDetails';
import UpdateEmployee from './Components/AdminDashboard/UpdateEmployee/UpdateEmployee';

import CustomerDashboard from './Components/CustomerDashboard/CustomerDashboard';
import CustomerAccounts from './Components/CustomerAccounts/CustomerAccounts';
import CustomerProfile from './Components/CustomerDashboard/CustomerProfile/CustomerProfile';
import ChangePassword from './Components/CustomerDashboard/ChangePassword/ChangePassword';
import AgentDashboard from './Components/AgentDashboard/AgentDashboard';
import MarketingEmail from './Components/AgentDashboard/MarketingEmail/MarketingEmail';
// import PaymentForm from './Components/CustomerDashboard/PaymentForm/PaymentForm';
import ContactUs from './Components/Layouts/ContactUs/ContactUs';
import AgentProfile from './Components/AgentDashboard/MarketingEmail/AgentProfile/AgentProfile';
import ViewAccounts from './Components/AdminDashboard/ViewAccounts/ViewAccounts';
import PaymentForm from './Components/CustomerDashboard/PaymentForm/PaymentForm';
import AgentCustomers from './Components/AgentDashboard/AgentCustomers/AgentCustomers';
import AgentCustomerInsurAccounts from './Components/AgentDashboard/AgentCustInsuAccnts/AgentCustomerInsurAccounts';
import ViewPayments from './Components/AgentDashboard/ViewPayments/ViewPayments';
import ViewPolicyPayments from './Components/CustomerDashboard/ViewPolicyPayment/ViewPolicyPayment';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/loginpage/admin" element={<AdminLogin />} />
        <Route exact path="/admindashboard/:username/:role" element={<AdminDashboard />} />
        <Route exact path="/view/policydetails/:username/:role" element={<ViewPolicyDetails />} />


        <Route exact path="/loginpage/employee" element={<EmployeeLogin />} />
        <Route exact path="/employeedashboard/:username/:role" element={<EmployeeDashboard />} />

        <Route exact path="/insuranceplan/:username/:role" element={<InsurancePlan />} />
        <Route exact path="/viewinsuranceplan/:username/:role" element={<ViewInsurance />} />
        <Route exact path="/updateinsuranceplan/:username/:role/:id" element={<UpdateInsurance />} />

        <Route exact path="/addpolicy/:username/:role" element={<AddPolicy />} />
        <Route exact path="/view/policy/:username/:role" element={<ViewScheme />} />

        {/* <Route exact path="/add/policydetails/:username/:role" element={<AddPolicyDetails />} /> */}
        <Route exact path="/addstate/:username/:role" element={<AddState />} />
        <Route exact path="/view/state/:username/:role" element={<ViewState />} />
        
        <Route exact path="/addcity/:username/:role" element={<AddCity />} />
        <Route exact path="/view/city/:username/:role" element={<ViewCity />} />

        <Route exact path="/addemployee/:username/:role" element={<AddEmployee />} />
        <Route exact path="/view/employee/:username/:role" element={<ViewEmployee />} />
        <Route exact path="/update/employee/:username/:role/:empid" element={<UpdateEmployee />} />

        <Route exact path="/addagent/:username/:role" element={<AddAgent />} />
        <Route exact path="/view/agent/:username/:role" element={<ViewAgent />} />

        <Route exact path="/view/customer/:username/:role" element={<ViewCustomer />} />

        <Route exact path="/viewpolicies/:planid/:username?/:role?" element={<ViewPolicies />} />
        <Route exact path="/viewpolicy/details/:policyid" element={<PolicyDetails />} />

        
        <Route exact path="/user/registration/:agentid?" element={<UserRegistration />} />

        <Route exact path="/loginpage/customer" element={<CustomerLogin />} />

        <Route exact path="/loginpage/agent" element={<AgentLogin />} />

        <Route exact path="/customerdashboard/:username/:role" element={<CustomerDashboard />} />
        <Route exact path="/customeraccounts/:username/:role" element={<CustomerAccounts />} />
        <Route exact path="/customer-profile/:username/:role" element={<CustomerProfile />} />
        <Route exact path="/change-password/:username/:role" element={<ChangePassword />} />
        {/* <Route exact path="/payment/:username/:role" element={<PaymentForm />} /> */}
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/agentdashboard/:username/:role" element={<AgentDashboard />} />
        <Route exact path="/marketing/:username/:role" element={<MarketingEmail />} />
        <Route exact path="/agent-profile/:username/:role" element={<AgentProfile />} />

        <Route exact path="/view/accounts/:username/:role" element={<ViewAccounts />} />
        <Route exact path="/payment/:username/:role" element={<PaymentForm />} />
        <Route exact path="/agentcustomer/:username/:role" element={<AgentCustomers />} />
        <Route exact path="/agentcustaccounts/:username/:role" element={<AgentCustomerInsurAccounts />} />

        <Route exact path="/agentcustpayments/:username/:role" element={<ViewPayments />} />
        <Route exact path="/custpayments/:username/:role/" element={<ViewPolicyPayments />} />
      </Routes>
      
    </div>
  );
}

export default App;
