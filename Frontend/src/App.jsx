import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HospitalForm from "./components/HospitalForm"
import DoctorForm from "./components/DoctorForm"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HospitalForm />} />
        <Route path="/doctor-form" element={<DoctorForm />} />
      </Routes>
    </Router>
  )
}

export default App

