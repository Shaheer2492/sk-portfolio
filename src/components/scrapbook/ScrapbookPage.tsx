"use client";
import { motion } from "framer-motion";
import { Heart, Camera, Code, Music, Gamepad2, Coffee } from "lucide-react";

export default function ScrapbookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-red-900/20 p-8 overflow-auto">
      {/* Scrapbook background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Page title with scrapbook styling */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-800 dark:text-amber-200 mb-4 transform -rotate-1">
            Behind the Scenes
          </h1>
          <div className="inline-block bg-white/80 dark:bg-black/40 px-6 py-2 rounded-full shadow-sm border-2 border-amber-200 dark:border-amber-700 transform rotate-1">
            <span className="text-amber-700 dark:text-amber-300 font-medium">Life Beyond Code</span>
          </div>
        </motion.div>

        {/* Polaroid-style photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Photo 1 - Personal */}
          <motion.div 
            className="transform rotate-2 hover:rotate-0 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white dark:bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-3 flex items-center justify-center">
                <Camera className="w-12 h-12 text-gray-400" />
                <span className="text-xs text-gray-500 ml-2">Personal Photo</span>
              </div>
              <p className="text-center font-handwriting text-gray-700 text-sm">
                "Always learning, always growing 📚"
              </p>
            </div>
          </motion.div>

          {/* Photo 2 - Family */}
          <motion.div 
            className="transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-red-100 rounded mb-3 flex items-center justify-center">
                <Heart className="w-12 h-12 text-gray-400" />
                <span className="text-xs text-gray-500 ml-2">Family Time</span>
              </div>
              <p className="text-center font-handwriting text-gray-700 text-sm">
                "Family is everything ❤️"
              </p>
            </div>
          </motion.div>

          {/* Photo 3 - Coding */}
          <motion.div 
            className="transform rotate-3 hover:rotate-0 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded mb-3 flex items-center justify-center">
                <Code className="w-12 h-12 text-gray-400" />
                <span className="text-xs text-gray-500 ml-2">Late Night Coding</span>
              </div>
              <p className="text-center font-handwriting text-gray-700 text-sm">
                "2 AM and still debugging 💻"
              </p>
            </div>
          </motion.div>

          {/* Photo 4 - Hobbies */}
          <motion.div 
            className="transform -rotate-2 hover:rotate-0 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded mb-3 flex items-center justify-center">
                <Music className="w-12 h-12 text-gray-400" />
                <span className="text-xs text-gray-500 ml-2">Music Sessions</span>
              </div>
              <p className="text-center font-handwriting text-gray-700 text-sm">
                "Finding rhythm in code and life 🎵"
              </p>
            </div>
          </motion.div>

          {/* Photo 5 - Gaming */}
          <motion.div 
            className="transform rotate-1 hover:rotate-0 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded mb-3 flex items-center justify-center">
                <Gamepad2 className="w-12 h-12 text-gray-400" />
                <span className="text-xs text-gray-500 ml-2">Gaming Break</span>
              </div>
              <p className="text-center font-handwriting text-gray-700 text-sm">
                "Strategy games = better problem solving 🎮"
              </p>
            </div>
          </motion.div>

          {/* Photo 6 - Coffee */}
          <motion.div 
            className="transform -rotate-3 hover:rotate-0 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 rounded mb-3 flex items-center justify-center">
                <Coffee className="w-12 h-12 text-gray-400" />
                <span className="text-xs text-gray-500 ml-2">Coffee Culture</span>
              </div>
              <p className="text-center font-handwriting text-gray-700 text-sm">
                "Fueled by caffeine and curiosity ☕"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sticky notes with personal quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            className="bg-yellow-200 dark:bg-yellow-300/90 p-4 shadow-sm transform rotate-1 hover:rotate-0 transition-transform"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-gray-800 font-handwriting text-sm leading-relaxed">
              "Every bug is just a feature waiting to be discovered... or fixed 😅"
            </p>
          </motion.div>

          <motion.div 
            className="bg-pink-200 dark:bg-pink-300/90 p-4 shadow-sm transform -rotate-2 hover:rotate-0 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-gray-800 font-handwriting text-sm leading-relaxed">
              "Life's too short for boring code. Make it elegant, make it yours."
            </p>
          </motion.div>

          <motion.div 
            className="bg-green-200 dark:bg-green-300/90 p-4 shadow-sm transform rotate-2 hover:rotate-0 transition-transform"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-gray-800 font-handwriting text-sm leading-relaxed">
              "The best ideas come at 3 AM or during a walk. Never during meetings."
            </p>
          </motion.div>
        </div>

        {/* Tape pieces for authentic scrapbook feel */}
        <div className="absolute top-20 left-10 w-16 h-8 bg-gray-200/50 dark:bg-gray-700/50 transform rotate-12 rounded-sm"></div>
        <div className="absolute top-40 right-20 w-12 h-6 bg-gray-200/50 dark:bg-gray-700/50 transform -rotate-45 rounded-sm"></div>
        <div className="absolute bottom-32 left-32 w-20 h-6 bg-gray-200/50 dark:bg-gray-700/50 transform rotate-6 rounded-sm"></div>
      </div>
    </div>
  );
}
