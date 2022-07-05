import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Index from "./template/Index";
import UserSelector from "./user/UserSelector";
import Trend from "./Trend";

function App() {
  const [movie, setMovie] = useState();

  const getMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=e46e41278a82040a873227b4820d1e48"
      )
      .then((res) => {
        console.log(res);
        setMovie(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
