/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500",       
        secondary: "#FF8C00",     
        accent: "#FF4500",        
        background: "#000000",    
        text: "#FFFFFF",          
        success: "#10B981",       
        warning: "#FACC15",       
        error: "#EF4444",   
        third: "#374151",
        fourthy: "#1F2937",
        fifthy: "#111827",
        sixthy: "#9CA3AF",
        seventhy: "#D1D5DB",
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(90deg, #FF8C00 0%, #FFA500 50%, #FF4500 100%)"
      }
    },
  },
  plugins: [],
};
