import { User } from "lucide-react";

export function DoctorCard({ name, specialization, phone, availability, hospital }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
          <User className="h-14 w-14 text-purple-600" />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-lg text-gray-700 font-medium">{specialization}</p>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="font-semibold">📞</span> {phone}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="font-semibold">🕒</span> Available: {availability}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="font-semibold">🏥</span> {hospital?.name || "Unknown Hospital"}
          </p>
        </div>
      </div>
    );
  }
  