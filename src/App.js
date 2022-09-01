import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import PracticeClass from './PracticeClass';
import Payment from './Pages/Dashboard/Payment/Payment';

function App() {
  return (
    <div className="App">
      {/* <PracticeClass /> */}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="appointment" element={<Appointment />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="" element={<DashboardHome />} />
              <Route path="payment/:appointmentId" element={<Payment />} />
              <Route path="*" element={<AdminRoute />} >
                <Route path="makeAdmin" element={<MakeAdmin />} />
                <Route path="addDoctor" element={<AddDoctor />} />
              </Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
