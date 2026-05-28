import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Homepage from "./pages/Homepage";
import CareerAgentPage from "./pages/CareerAgentPage";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/chat" element={<CareerAgentPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
