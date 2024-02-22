import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import CS7 from "./pages/CS7";
import Carrier from "./pages/Carrier";
import Culture from "./pages/Culture";
import T_C from "./pages/T&C";
import Cookies from "./pages/Cookies";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import ScrollToTop from "./components/ScrollToTop";
import News from "./pages/News";
import Requestdemo from "./pages/Requestdemo";
import Blogs from "./pages/Blogs";
import CS1 from "./pages/CS1";
import CreateBlog from "./pages/CreateBlog";
import Createnews from "./pages/Createnews";
import CS8 from "./pages/CS8";
import SingleBlog from "./pages/SingleBlog";
import SingleNews from "./pages/SingleNews";
import Da from "./pages/Da";
import CS9 from "./pages/CS9";
import CS10 from "./pages/CS10";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/valueproposition" element={<ValueProposition />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/investors" element={<Investors />} />

        {/* Services Route */}
        <Route path="/services" element={<Services />} />
        <Route path="/data-analytics" element={<Da />} />
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
        <Route path="/our-work" element={<Ourwork />} />
        <Route path="/case1" element={<CS1 />} />
        <Route path="/case2" element={<CS2 />} />
        <Route path="/case3" element={<CS3 />} />
        <Route path="/case4" element={<CS4 />} />
        <Route path="/case5" element={<CS5 />} />
        <Route path="/case6" element={<CS6 />} />
        <Route path="/case7" element={<CS7 />} />
        <Route path="/case8" element={<CS8 />} />
        <Route path="/case9" element={<CS9 />} />
        <Route path="/case10" element={<CS10 />} />

        {/* Our Partners */}
        <Route path="/partners" element={<Partners />} />

        {/* Poeple */}
        <Route path="/avenues" element={<Carrier />} />
        <Route path="/culture" element={<Culture />} />

        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/data_analytics" element={<Blog1 />} />
        <Route path="/cloud_solution" element={<Blog2 />} />
        <Route path="/marketing_automation" element={<Blog3 />} />
        <Route path="/digital_transformation" element={<Blog4 />} />
        <Route path="/blog/:id" element={<SingleBlog />} />

        {/* Create Blog */}
        <Route path="/create-blog" element={<CreateBlog />} />

        {/* Terms and Conditions */}
        <Route path="/terms_conditions" element={<T_C />} />

        {/* Cookies */}
        <Route path="/cookies" element={<Cookies />} />

        {/* NEWS */}
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<SingleNews />} />

        {/* Create News */}
        <Route path="/create-news" element={<Createnews />} />

        {/* Request Demo */}
        <Route path="/request" element={<Requestdemo />} />

        <Route path="/media" element={<Media />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
