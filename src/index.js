import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Introduction from './components/Introduction';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='introduction' element={<Introduction />} />
          <Route path='education' element={<Education />} />
          <Route path='workexperience' element={<WorkExperience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);