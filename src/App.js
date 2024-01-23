import React from 'react';
import Header from './Components/header';
import NewHeader from './Components/NewHeader';
import UnderHeader from './Components/UnderHeader'
import InfoBlock from './Components/InfoBlock'
import IslandInfoParameters from './Components/IslandInfoParameters';
import KeyFeatures from './Components/KeyFeatures';

function App() {
  return (
    <div className="App">
      <NewHeader />
      {/* <Header /> */}
      <UnderHeader />
      <InfoBlock />
      <IslandInfoParameters />
      <KeyFeatures />
    </div>
  );
}

export default App;
