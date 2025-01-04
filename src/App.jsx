import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import RockPaperScissors from "./pages/RockPaperScissors";
import Tasks from "./pages/Tasks";
import Filter from "./pages/filter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<RockPaperScissors />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="filter" element={<Filter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
