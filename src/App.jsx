import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./template/Index";
import UserSelector from "./user/UserSelector";
import MovieMain from "./page/main/MovieMain";
import ShowMovie from "./page/ShowMovie";
import Library from "./page/Library";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="user" element={<UserSelector />} />
          <Route path="trend" element={<MovieMain />} />
          <Route path="movie" element={<MovieMain />} />
          <Route path="series" element={<MovieMain />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<UserSelector />} />
        </Route>
        <Route path="showMovie" element={<ShowMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
