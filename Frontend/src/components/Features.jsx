import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Stethoscope, Video, Code, Brain } from 'lucide-react';

const features = [
  {
    title: "Instant Health Solutions",
    description: "Access comprehensive healthcare services at your fingertips",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    icon: <Stethoscope className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Consult a Doctor Instantly",
    description: "Connect with qualified healthcare professionals 24/7",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=2070",
    icon: <Video className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "Try Our SDK for Easy Integration",
    description: "Seamlessly integrate our healthcare solutions into your platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2072",
    icon: <Code className="w-6 h-6 text-indigo-600" />
  },
  {
    title: "AI-Powered Diagnostics",
    description: "Advanced AI algorithms for accurate preliminary diagnostics",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    icon: <Brain className="w-6 h-6 text-indigo-600" />
  }
];

function Feature() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(features.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(features.length / 2) - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h3 className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">
            Our Recommendation
          </h3>
          <h2 className="mt-2 text-4xl font-bold text-[#14183E] tracking-tight">
            Our Features
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              animate={{ x: `-${currentIndex * 100}%` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-1/2 flex-shrink-0 px-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg"
                  >
                    <div className="relative h-[400px]">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#14183E] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-100 rounded-full p-4 hover:bg-gray-200 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-indigo-500 rounded-full p-4 hover:bg-indigo-600 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feature;