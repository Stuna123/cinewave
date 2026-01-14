# 🎬 CineWave – Movie Discovery App

## Description 

CineWave is a React-based movie discovery application that allows users to explore, search, and view detailed information about movies using The Movie Database (TMDB) API.

This project started from a tutorial base and was extended with custom features, performance optimizations, and UX improvements.

------

## 🚀 Live Features

🎥 __Browse movies__ :

-   Now Playing
-   Popular
-   Top Rated
-   Upcoming

🔍 __Real-time Movie Search__ :
-   Automatic search using onChange
-   Optimized with debounce to limit API requests

⏳ Loading state & empty search handling :
-   User feedback during API requests

🌙 __Dark / Light mode__ :
-   Persisted using localStorage

🎬 __Movie detail pages (dynamic routing)__ :
-   Synopsis
-   Genres
-   Average rating & vote count
-   Runtime, budget, revenue
-   IMDb link

📱  __Fully responsive UI__
❌ __Custom 404 Page__
⬆️ __Scroll to top on route change__

------

## 🛠 Tech Stack

-   React
-   React Router
-   Tailwind CSS
-   TMDB API
-   JavaScript (ES6+)

------

## 🧩 Custom Hooks
-   `useFetch` – reusable data fetching logic
-   `useDebounce` – optimized API calls during search
-   `useTitle` – dynamic document titles

------

## ⚡ Performance & UX Improvements

Debounced search to reduce unnecessary API calls
Prevents empty search requests
User-friendly messages for : 
    -   Empty input
    -   No results found
    -   Loading state
Optimized navigation without page reloads

------

## 📂 Structure of project

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

------

## 🔑 Environment Variables
**REACT_APP_API_KEY=your_tmdb_api_key_here**

------

## Installation & Setup

git clone https://github.com/your-username/cinewave.git
cd cinewave
npm install
npm start

------
## 💬 Feedback

Feedback and suggestions are welcome!
If you like the project, feel free to ⭐ the repository.

------

## Acknowledgements

This project was inspired by a tutorial from **Shubham Sarda.**
I extended it with additional features, refactoring, and improvements.

--- 
## Screenshot
![alt text](cinewave.png)