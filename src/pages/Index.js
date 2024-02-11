import React from "react";
import Header from "../Components/header";
import UnderHeader from "../Components/UnderHeader";
import InfoBlock from "../Components/InfoBlock";
import IslandInfoParameters from "../Components/IslandInfoParameters";
import KeyFeatures from "../Components/KeyFeatures";
import Gallery from "../Components/Gallery";
import FAQ from "../Components/FAQ";
import ComingSoon from "../Components/ComingSoon";
import Footer from "../Components/Footer";
import Experience from "../Components/Experience";

const Index = () => {
   return (
      <div>
         {/* <NewHeader /> */}
         <Header />
         <UnderHeader />
         <InfoBlock />
         <Experience />
         <IslandInfoParameters />
         <KeyFeatures />
         {/* <Gallery /> */}
         {/* <FAQ /> */}
         {/* <ComingSoon /> */}
         <Footer />
      </div>
   );
};

export default Index;
