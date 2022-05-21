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
  Profile,
  Dashboard
} from 'pages';

import { ProtectedRoute } from 'components';

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
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
