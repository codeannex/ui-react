import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FormPage, MainPage } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
