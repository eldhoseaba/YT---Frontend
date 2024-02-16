import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminRoute from "./routes/AdminRoute";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<AdminRoute />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
