import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/main pages/home page/HomePage";
import AboutUsPage from "./components/main pages/about us/AboutUsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about_us" element={<AboutUsPage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
