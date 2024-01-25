import React, {useEffect} from 'react';
import Header from './Components/header';
import NewHeader from './Components/NewHeader';
import UnderHeader from './Components/UnderHeader'
import InfoBlock from './Components/InfoBlock'
import IslandInfoParameters from './Components/IslandInfoParameters';
import KeyFeatures from './Components/KeyFeatures';
import SmoothScroll from './hooks/SmoothScroll';

function App() {
  return (
    <div className="App">
      <SmoothScroll>
        {/* <NewHeader /> */}
        {/* <Header /> */}
        <UnderHeader />
        <InfoBlock />
        <IslandInfoParameters />
        <KeyFeatures />
      </SmoothScroll>
    </div>
  );
}

export default App;
