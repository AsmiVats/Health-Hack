import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HOSPITAL } from "../api/hospital";

const HospitalForm = () => {
  const navigate = useNavigate();
  const [hospitalId,setHospitalId] = useState("");
  const [hospitalName,setHospitalName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    specialization: "",
    phone: "",
    doctors: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Hospital Form Data:", formData);
    try{
      const response = await HOSPITAL.Post(formData);
      if(response){
        setHospitalId(response._id);
        setHospitalName(response.name);
        navigate("/doctor-form", { state: { hospitalId: response._id, hospitalName: response.name } });
      }
    }
    catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg"
      >
        <div>
          <motion.h2 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center text-3xl font-extrabold text-gray-900"
          >
            Hospital Details
          </motion.h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {['name', 'location', 'specialization', 'phone'].map((field, index) => (
              <motion.div 
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="mb-4"
              >
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-transform hover:scale-105"
            >
              Submit and Add Doctor Details
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default HospitalForm;
