import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from 'hooks';
import { Toaster } from 'react-hot-toast';

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
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 5000,
          style: {
            background: 'var(--text2)',
            color: 'var(--surface2)'
          }
        }}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/:quizId"
          element={
            <ProtectedRoute>
              <QuizContainer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category"
          element={
            <ProtectedRoute>
              <CategoryPage />
            </ProtectedRoute>
          }
        />
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
