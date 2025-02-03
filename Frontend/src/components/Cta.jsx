import { Building2, Hospital } from 'lucide-react';

function Cta() {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 w-full max-w-5xl shadow-xl relative overflow-hidden">
        <div className="flex flex-col items-center text-center gap-6 relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-navy-900">
            Want To Register Multiple Hospitals?
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-navy-800">
            Partner Up With Us!
          </h2>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Become a host
          </button>
        </div>

        {/* Floating Icons */}
        <div className="absolute left-8 top-8">
          <Hospital className="w-12 h-12 text-indigo-600 opacity-80" />
        </div>
        <div className="absolute right-8 top-8">
          <Building2 className="w-12 h-12 text-indigo-600 opacity-80" />
        </div>

        {/* Floating Avatars */}
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: Math.floor(Math.random() * 3)
            }}
          >
            <img
              src={avatar}
              alt="Partner"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cta;