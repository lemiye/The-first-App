import "./App.css";
import Header from "./components/Header";
import Upcoming from "./Pages/Upcoming";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Search from "./Pages/Search";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <h1>The Best TV Shows App</h1>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="pages/favorites" element={<Favorites />} />
          <Route path="pages/upcoming" element={<Upcoming />} />
          <Route path="/search" element={<Search/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>       
      </div>
    </BrowserRouter>
  );
}

export default App;
