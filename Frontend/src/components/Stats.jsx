export default function Stats() {
    return (
      <div className="flex justify-center items-center bg-gray-50 py-16">
        <div className="grid grid-cols-3 gap-20 text-center">
          <div className="transition-transform transform hover:scale-105">
            <p className="text-6xl font-extrabold text-purple-700">50+</p>
            <p className="text-gray-600 text-xl mt-3">Users</p>
            <div className="w-20 h-2 bg-purple-300 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="transition-transform transform hover:scale-105">
            <p className="text-6xl font-extrabold text-purple-700">4</p>
            <p className="text-gray-600 text-xl mt-3">Partners</p>
            <div className="w-20 h-2 bg-purple-300 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="transition-transform transform hover:scale-105">
            <p className="text-6xl font-extrabold text-purple-700">10</p>
            <p className="text-gray-600 text-xl mt-3">Doctors</p>
            <div className="w-20 h-2 bg-purple-300 mx-auto mt-3 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }
  