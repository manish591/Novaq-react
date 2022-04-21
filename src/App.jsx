import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { CategoryPage, LandingPage, QuestionPage, Result, Rules } from 'pages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/result" element={<Result />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/question" element={<QuestionPage />} />
    </Routes>
  </div>
);

export default App;
