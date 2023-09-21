// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    
    // Add any other CSS or HTML files you want to include here
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle,  #484013 30%,  rgba(35,62,69,255) 100%)',
        'radial-gradient2':'radial-gradient(circle,  #2b0314  20%, #1a1919 100% )'
      },
    },
  },
  plugins: [],
};
