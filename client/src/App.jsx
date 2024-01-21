import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Media from "./pages/Media";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import ValueProposition from "./pages/ValueProposition";
import Leadership from "./pages/Leadership";
import Services from "./pages/Services";
import CloudSolution from "./pages/CloudSolution";
import MarketingAutomation from "./pages/MarketingAutomation";
import DigitalTrans from "./pages/DigitalTrans";
import Industries from "./pages/Industries";
import Pharma from "./pages/Pharma";
import FMCG from "./pages/FMCG";
import Automobile from "./pages/Automobile";
import Hospitality from "./pages/Hospitality";
import Manufacturing from "./pages/Manufacturing";
import Ourwork from "./pages/Ourwork";
import CS2 from "./pages/CS2";
import CS3 from "./pages/CS3";
import CS4 from "./pages/CS4";
import CS5 from "./pages/CS5";
import CS6 from "./pages/CS6";
import Partners from "./pages/partners";

function App() {
  return (
    <>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/about_1" element={<ValueProposition />} />
        <Route path="/about_2" element={<Leadership />} />
        <Route path="/investors" element={<Investors />} />

        {/* Services Route */}
        <Route path="/services" element={<Services />} />
        <Route path="/cloud-solution" element={<CloudSolution />} />
        <Route path="/marketing-automation" element={<MarketingAutomation />} />
        <Route path="/digital-transformation" element={<DigitalTrans />} />

        {/* Industries Routes */}
        <Route path="/banking" element={<Industries />} />
        <Route path="/pharmaceuticals" element={<Pharma />} />
        <Route path="/fmcg" element={<FMCG />} />
        <Route path="/automobile" element={<Automobile />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/manufacturing" element={<Manufacturing />} />

        {/* Our Work */}
        <Route path="/our-work" element={<Ourwork/>} />
        <Route path="/case2" element={<CS2/>} />
        <Route path="/case3" element={<CS3/>} />
        <Route path="/case4" element={<CS4/>} />
        <Route path="/case5" element={<CS5/>} />
        <Route path="/case6" element={<CS6/>} />

        {/* Our Partners */}
        <Route path="/partners" element={<Partners/>} />

        <Route path="/media" element={<Media />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
