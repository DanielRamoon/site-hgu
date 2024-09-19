import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Branches from "./pages/branches";
import OurPlans from "./pages/ourPlans/indes";
import DescriptionSlide from "./pages/descriptionSlide";
import Ombudsman from "./pages/ombudsman";
import Page from "./pages/PageMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/description-slide" element={<DescriptionSlide />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/our-plans" element={<OurPlans />} />
        <Route path="/ouvidoria" element={<Ombudsman />} />
        <Route path="/" element={<Page />} />
        <Route path="/page/:pageTitle" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
