import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PlanetsPage from "./pages/PlanetsPage";
import AddProjectPage from "./pages/AddProjectPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-project" element={<AddProjectPage />} />
      <Route path="/planets" element={<PlanetsPage/>}/>
    </Routes>
  );
}

export default App;
