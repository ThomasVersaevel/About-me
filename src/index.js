import React from "react";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Introduction from "./components/Introduction";
import Grid from "./components/Grid";

document.body.style.overflow = "hidden";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Introduction />} /> */}
          <Route path="introduction" element={<Introduction />} />
          <Route path="education" element={<Education />} />
          <Route path="workexperience" element={<WorkExperience />} />
          <Route path="grid" element={<Grid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
