import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Branches from "./pages/branches";
import OurPlans from "./pages/ourPlans/indes";
import DescriptionSlide from "./pages/descriptionSlide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/description-slide" element={<DescriptionSlide />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/our-plans" element={<OurPlans />} />
      </Routes>
    </Router>
  );
}

export default App;
