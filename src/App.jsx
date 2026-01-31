import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home_page from './Page/home_page.jsx'
import {  Routes, Route } from 'react-router-dom';

import Leaderboard from './Page/leaderboard.jsx'
import './services/subject_Card.css'
import Login from './services/login.jsx'
import Signup from './Page/signup.jsx'
import Layout from './services/Layout.jsx';
import Quiz_start from './Page/quiz_startpage.jsx'
import Results from './Page/results.jsx'
import Create_quiz from './Page/create_quiz.jsx'


function Quiz() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/leader_board" element={<Leaderboard />} />
          <Route path="/home" element={<Home_page />} />
          
        </Route>

        <Route path="/results/:attempt_Id" element={<Results />} />
        <Route path="/attempt-quiz/:quizId" element={<Quiz_start />} />
         <Route path="/create-quiz" element={<Create_quiz />} />
      </Routes>


    </div>
  );
}

export default Quiz;
