import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import {
  CategoryPage,
  LandingPage,
  QuestionPage,
  Result,
  Rules,
  QuizContainer
} from 'pages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz/:quizId" element={<QuizContainer />}>
        <Route index element={<Rules />} />
        <Route path="result" element={<Result />} />
        <Route path="question" element={<QuestionPage />} />
      </Route>
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  </div>
);

export default App;
