import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#f8f5ff]"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Medi-Cal</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
            About Us
          </button>
          <button className="px-4 py-2 rounded-full bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors">
            Register Your Hospital
          </button>
        </div>
      </nav>

      <motion.div 
        className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-6xl font-bold text-[#7c3aed]">Your Health,</h2>
            <h2 className="text-6xl font-bold text-[#7c3aed] opacity-50">Our Priority</h2>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Get trusted health solutions tailored to your needs, instant chatbot assistance 
            for your questions, and direct access to experienced doctors whenever you need it—all 
            in one convenient platform.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-[#1f2937] text-white hover:bg-[#111827] transition-colors">
              Get Health Solutions
            </button>
            <button className="px-6 py-3 rounded-full bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-colors">
              Consult Now
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-[600px] mx-auto">
            <motion.div 
              className="relative flex justify-center items-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="w-[300px] h-[600px] bg-white rounded-[40px] border-8 border-black relative shadow-xl transform rotate-[-5deg]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl"></div>
                <div className="flex items-center justify-center h-full">
                  <Bot size={48} className="text-[#7c3aed]" />
                  <span className="ml-2 text-xl font-semibold">InfoBot</span>
                </div>
              </div>
              <div className="w-[300px] h-[600px] bg-white rounded-[40px] border-8 border-black relative shadow-xl transform translate-y-8 rotate-[5deg]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl"></div>
                <div className="p-4">
                  <div className="bg-gray-100 rounded-2xl p-4 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-[#7c3aed] rounded-full"></div>
                      <div>
                        <p className="font-semibold">Medi-cal</p>
                        <p className="text-sm text-gray-500">Support Agent</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-3 rounded-2xl shadow-sm">
                        Hello! 👋 Im your health assistant. How can I help you today?
                      </div>
                      <div className="bg-[#7c3aed] text-white p-3 rounded-2xl text-right">
                        I have a headache
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
