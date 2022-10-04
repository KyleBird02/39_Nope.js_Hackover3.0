import './App.css';
import { Routes, Route} from "react-router-dom";
//import Onboarding from './components/Onboarding';
import Test from './components/Test';
import Roles from './components/Roles';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="role" element={<Roles />} />
        <Route path="signup" element={<Test />} />
        <Route path="admin" element={<Test />} />
        <Route path="organizer" element={<Test />} />
        <Route path="participant" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
