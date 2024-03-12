import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import { useAuth } from './context/Context';
import EDashboard from './pages/Dashboards/EmployeeDashboard/EDashboard';
import ManagerDashboard from "./pages/Dashboards/ManagerDashboard/ManagerDashboard";

function App() {
  const { role } = useAuth()
  return (
    role === '' ?
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      : role === 'employee' ?
        <Routes>
          <Route exact path="/employee" element={ <EDashboard /> } />
          <Route path="*" element={ <Navigate to="/employee" /> } />
        </Routes>
        :
        <Routes>
          <Route exact path="/leave-management" element={ <ManagerDashboard /> } />
          <Route path="*" element={ <Navigate to="/leave-management" /> } />
        </Routes>
  );
}

export default App;
