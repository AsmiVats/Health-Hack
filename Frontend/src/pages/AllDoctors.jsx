import { useEffect, useState } from "react";
import { DOCTOR } from "../api/doctor"; // Adjust path if needed
import { DoctorCard } from "../components/DoctorCard";

export default function AllDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await DOCTOR.Get();
        console.log("API Response:", response); // Log response
        
        if (Array.isArray(response)) {  // ✅ Check if it's an array
          setDoctors(response);
        } else {
          setDoctors([]);  // Fallback to empty array
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setDoctors([]); 
      } finally {
        setLoading(false);
      }
    };
  
    fetchDoctors();
  }, []);
  
  

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-[#7C3AED] mb-8 text-center">Our Doctors</h1>
        {loading ? (
  <p className="text-center text-gray-600">Loading...</p>
) : doctors.length > 0 ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {doctors.map((doctor, index) => (
      <DoctorCard 
         key={index} 
        name={doctor.name} 
        specialization={doctor.specialization} 
        phone={doctor.phone} 
        availability={doctor.availability} 
        hospital={doctor.hospitalId}
      />
    ))}
  </div>
) : (
  <p className="text-center text-gray-600">No doctors available.</p>
)}

      </div>
    </div>
  );
}
