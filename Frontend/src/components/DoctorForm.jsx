import { useState } from "react";

const DoctorForm = () => {
  const [doctors, setDoctors] = useState([
    { name: "", specialization: "", phone: "", availability: "" },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDoctors = [...doctors];
    updatedDoctors[index][name] = value;
    setDoctors(updatedDoctors);
  };

  const handleAddDoctor = () => {
    setDoctors([
      ...doctors,
      { name: "", specialization: "", phone: "", availability: "" },
    ]);
  };

  const handleRemoveDoctor = (index) => {
    const updatedDoctors = doctors.filter((_, i) => i !== index);
    setDoctors(updatedDoctors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctors Data:", doctors);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Doctor Details
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="rounded-md shadow-sm space-y-4 border p-4 mb-4 bg-white"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Doctor {index + 1}
              </h3>
              <div className="mb-4">
                <label
                  htmlFor={`name-${index}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="name"
                  id={`name-${index}`}
                  value={doctor.name}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`specialization-${index}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  id={`specialization-${index}`}
                  value={doctor.specialization}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`phone-${index}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id={`phone-${index}`}
                  value={doctor.phone}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`availability-${index}`}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Availability
                </label>
                <input
                  type="text"
                  name="availability"
                  id={`availability-${index}`}
                  value={doctor.availability}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveDoctor(index)}
                className="text-red-600 hover:underline"
              >
                Remove Doctor
              </button>
            </div>
          ))}
          <div className="space-y-4">
            <button
              type="button"
              onClick={handleAddDoctor}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Another Doctor
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit All Doctors
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;
