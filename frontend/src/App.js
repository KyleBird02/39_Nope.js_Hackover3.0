import './App.css';
import { Routes, Route} from "react-router-dom";
import Onboarding from './components/Onboarding';
import Test from './components/Test';
import Roles from './components/Roles';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import OrgSignUp from './components/OrgSignUp';
import HomeScreen from './components/HomeScreen';
import { UserProvider } from './context/UserContext';
import Events from './components/Events';
import OrgDashboard from './components/OrgDashboard';
import CreateEvent from './components/CreateEvent';
import Verify from './components/Verify';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="role" element={<Roles />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="orgsignup" element={<OrgSignUp />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="admin" element={<Test />} />
          <Route path="organizer" element={<OrgDashboard />} />
          <Route path="participant" element={<Events />} />
          <Route path="create" element={<CreateEvent />} />
          <Route path="verify" element={<Verify />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
