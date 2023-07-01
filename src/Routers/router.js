/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route } from "react-router-dom";
// CSS
import "../App.css";
// Header
import RecipeReviewCard from "../Consultattion/CONSULTATION";
import Diaggnqsed from "../Diaggnqsed/Diaggnqsed";
import Home from "../Home/Content";
import Virus from "../Virus/Virus";
import Doctor from "../Doctor/doctor";
// Info Doctor
import Info from "../Info_Doctor/Info_1";
import Info1 from "../Info_Doctor/Info_2";
import Info2 from "../Info_Doctor/Info_3";
import Info3 from "../Info_Doctor/Info_4";
import Info4 from "../Info_Doctor/Info_5";
import Info5 from "../Info_Doctor/Info_6";
import Info6 from "../Info_Doctor/Info_7";
import Info7 from "../Info_Doctor/Info_8";
import Info8 from "../Info_Doctor/Info_9";
import Info9 from "../Info_Doctor/Info_10";

// Pages
import SimpleSlider from "../pages/page_one";
import SliderWithImages_Tow from "../pages/page_Tow";
import SliderWithImages_Three from "../pages/pages_Three";
import SliderWithImages_Four from "../pages/pages_Four";
import SliderWithImages_Five from "../pages/pages_Five";
import SliderWithImages_Six from "../pages/pages_Six";
import Department from "../Home/Department/Department";
import Chat from '../Home/Chat/Chat'
function Router() {
  return (
    <div className="App">
      <Routes>
        // Home
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Department" element={<Department />} />
        //Header
        <Route path="/K" element={<Doctor />} />
        <Route path="/O" element={<Virus />} />
        <Route path="/D" element={<Diaggnqsed />} />
        <Route path="/C" element={<Virus />} />
        <Route path="/R" element={<RecipeReviewCard />} />
        //pages
        <Route path="/S" element={<SimpleSlider />} />
        <Route path="/S2" element={<SliderWithImages_Tow />} />
        <Route path="/S3" element={<SliderWithImages_Three />} />
        <Route path="/S4" element={<SliderWithImages_Four />} />
        <Route path="/S5" element={<SliderWithImages_Five />} />
        <Route path="/S6" element={<SliderWithImages_Six />} />
        //Info Doctor
        <Route path="/m" element={<Info />} />
        <Route path="/m1" element={<Info1 />} />
        <Route path="/m2" element={<Info2 />} />
        <Route path="/m3" element={<Info3 />} />
        <Route path="/m4" element={<Info4 />} />
        <Route path="/m5" element={<Info5 />} />
        <Route path="/m6" element={<Info6 />} />
        <Route path="/m7" element={<Info7 />} />
        <Route path="/m8" element={<Info8 />} />
        <Route path="/m9" element={<Info9 />} />
      </Routes>
    </div>
  );
}

export default Router;
