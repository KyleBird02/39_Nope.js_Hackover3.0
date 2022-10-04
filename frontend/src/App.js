import './App.css';
import { Routes, Route} from "react-router-dom";
import Onboarding from './components/Onboarding';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="role" element={<Test />} />
        <Route path="signup" element={<Test />} />
        <Route path="admin" element={<Test />} />
        <Route path="organizer" element={<Test />} />
        <Route path="participant" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
