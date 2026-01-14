🎬 CineWave – Movie Discovery App
---
CineWave is a React-based movie discovery application that allows users to explore, search, and view detailed information about movies using The Movie Database (TMDB) API.

This project started from a tutorial base and was extended with custom features, performance optimizations, and UX improvements.

*******************
🚀 Live Features
---
🎥 _Browse movies_ :

• Now Playing
• Popular
• Top Rated
• Upcoming

🔍 _Real-time Movie Search_ :
• Automatic search using onChange
• Optimized with debounce to limit API requests

⏳ _Loading state & empty search handling_ :
• User feedback during API requests

🌙 _Dark / Light mode_ :
• Persisted using localStorage

🎬 _Movie detail pages (dynamic routing)_ :
• Synopsis
• Genres
• Average rating & vote count
• Runtime, budget, revenue
• IMDb link

📱 **Fully responsive UI**
❌ **Custom 404 Page**
⬆️ **Scroll to top on route change**

**************
🛠 Tech Stack
---
• React
• React Router
• Tailwind CSS
• TMDB API
• JavaScript (ES6+)

*****************
🧩 Custom Hooks
---
• _useFetch_ – reusable data fetching logic
• _useDebounce_ – optimized API calls during search
• _useTitle_ – dynamic document titles

**********************************
⚡ Performance & UX Improvements
---
• Debounced search to reduce unnecessary API calls
• Prevents empty search requests
• User-friendly messages for : 
    - Empty input
    - No results found
    - Loading state
• Optimized navigation without page reloads

************************
📂 Structure of project
---
**src/**
├── **components/**
│   ├── Header.js
│   ├── Card.js
│
├── **pages/**
│   ├── Home.js
│   ├── Search.js
│   ├── MovieDetail.js
│   ├── PageNotFound.js
│
├── **hooks/**
│   ├── useFetch.js
│   ├── useDebounce.js
│   ├── useTitle.js
│   
├──  **assets/**
├── App.js
└── index.js

************************
🔑 Environment Variables
---
**REACT_APP_API_KEY=your_tmdb_api_key_here**

************************
Installation & Setup
---
**git clone https://github.com/your-username/cinewave.git**
**cd cinewave**
**npm install**
**npm start**

************************
💬 Feedback
---
Feedback and suggestions are welcome!
If you like the project, feel free to ⭐ the repository.

************************
Acknowledgements
---
This project was inspired by a tutorial from **Shubham Sarda.**
I extended it with additional features, refactoring, and improvements.