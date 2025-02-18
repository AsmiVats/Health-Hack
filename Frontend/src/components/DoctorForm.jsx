import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { DOCTOR } from "../api/doctor";

const DoctorForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hospitalId, hospitalName } = location.state || {};
  const [doctors, setDoctors] = useState([
    { name: "", specialization: "", phone: "", availability: "", hospitalId: hospitalId },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDoctors = [...doctors];
    updatedDoctors[index][name] = value;
    setDoctors(updatedDoctors);
  };

  const handleAddDoctor = () => {
    setDoctors([
      ...doctors,
      { name: "", specialization: "", phone: "", availability: "", hospitalId: hospitalId },
    ]);
  };

  const handleRemoveDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Doctors Data:", doctors);

    try {
      for (const doctor of doctors) {
        const response = await DOCTOR.Post(doctor);
        if (response.success) {
          console.log("Doctor added:", response);
        }
      }
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-md w-full space-y-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Doctor Details for {hospitalName}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="rounded-md shadow-sm space-y-4 border p-4 mb-4 bg-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-800">Doctor {index + 1}</h3>
              <input
                type="text"
                name="name"
                value={doctor.name}
                onChange={(e) => handleChange(index, e)}
                required
                placeholder="Doctor Name"
                className="w-full px-3 py-2 border rounded-md shadow-sm"
              />
              <input
                type="text"
                name="specialization"
                value={doctor.specialization}
                onChange={(e) => handleChange(index, e)}
                required
                placeholder="Specialization"
                className="w-full px-3 py-2 border rounded-md shadow-sm"
              />
              <input
                type="tel"
                name="phone"
                value={doctor.phone}
                onChange={(e) => handleChange(index, e)}
                required
                placeholder="Phone"
                className="w-full px-3 py-2 border rounded-md shadow-sm"
              />
              <input
                type="text"
                name="availability"
                value={doctor.availability}
                onChange={(e) => handleChange(index, e)}
                required
                placeholder="Availability"
                className="w-full px-3 py-2 border rounded-md shadow-sm"
              />
              <button type="button" onClick={() => handleRemoveDoctor(index)} className="text-red-600 hover:underline">
                Remove Doctor
              </button>
            </motion.div>
          ))}
          <button type="button" onClick={handleAddDoctor} className="w-full py-2 bg-blue-600 text-white rounded-md">
            Add Another Doctor
          </button>
          <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md">
            Submit All Doctors
          </button>
        </form>
      </motion.div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="text-lg font-semibold">Saved Successfully!</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DoctorForm;
