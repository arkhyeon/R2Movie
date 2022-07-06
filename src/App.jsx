import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Index from "./template/Index";
import UserSelector from "./user/UserSelector";
import Trend from "./page/trend/Trend";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="user" element={<UserSelector />} />
          <Route path="trend" element={<Trend />} />
          <Route path="*" element={<UserSelector />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
