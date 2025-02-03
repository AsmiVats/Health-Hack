import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HospitalForm from "./components/HospitalForm";
import DoctorForm from "./components/DoctorForm";
import Landing from "./pages/Landing";
import AllDoctors from "./pages/AllDoctors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/alldoctors" element={<AllDoctors/>} />
        <Route path="/hospital-form" element={<HospitalForm />} />
        <Route path="/doctor-form" element={<DoctorForm />} />
      </Routes>
    </Router>
  );
}

export default App;
