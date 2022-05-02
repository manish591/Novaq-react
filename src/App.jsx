import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from 'hooks';

import {
  CategoryPage,
  LandingPage,
  QuizContainer,
  Login,
  Signup,
  Profile
} from 'pages';

const App = () => {
  useScrollToTop();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz/:quizId" element={<QuizContainer />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default App;
