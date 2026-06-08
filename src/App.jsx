import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Homepage from "./pages/Homepage";
import CareerAgentPage from "./pages/CareerAgentPage";
import PageNotFound from "./pages/PageNotFound";
import ProjectPagev2 from "./pages/ProjectPagev2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/chat" element={<CareerAgentPage />} />
        <Route path="/:slug" element={<ProjectPagev2 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
