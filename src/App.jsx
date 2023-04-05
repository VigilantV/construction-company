import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/main pages/home page/HomePage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
