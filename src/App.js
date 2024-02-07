import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";

function App() {
   return (
      <Router>
         <div className="App">
            {/* <SmoothScroll> */}
            <Routes>
               <Route path="/" element={<Index />} />
               <Route path="/about" element={<AboutUs />} />
               {/* Other routes go here */}
            </Routes>
            {/* </SmoothScroll> */}
         </div>
      </Router>
   );
}

export default App;
