import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import "./fonts/Montserrat-VariableFont_wght.tff";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";

function App() {
   return (
      <Router>
         <div className="App">
            {/* <SmoothScroll> */}
            <Routes>
               <Route path="/" element={<Index />} />
               <Route path="/contact" element={<ContactPage />} />
               {/* Other routes go here */}
            </Routes>
            {/* </SmoothScroll> */}
         </div>
      </Router>
   );
}

export default App;
