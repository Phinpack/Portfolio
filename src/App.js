import React, { useEffect } from "react";
import Header from "./Components/header";
import NewHeader from "./Components/NewHeader";
import UnderHeader from "./Components/UnderHeader";
import InfoBlock from "./Components/InfoBlock";
import IslandInfoParameters from "./Components/IslandInfoParameters";
import KeyFeatures from "./Components/KeyFeatures";
// import SmoothScroll from "./hooks/SmoothScroll";
import Gallery from "./Components/Gallery";
import FAQ from "./Components/FAQ";

function App() {
   return (
      <div className="App">
         {/* <SmoothScroll> */}
         {/* <NewHeader /> */}
         <Header />
         <UnderHeader />
         <InfoBlock />
         <IslandInfoParameters />
         <KeyFeatures />
         <Gallery />
         <FAQ />
         {/* </SmoothScroll> */}
      </div>
   );
}

export default App;
