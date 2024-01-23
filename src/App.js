import React from 'react';
import Header from './Components/header';
import NewHeader from './Components/NewHeader';
import UnderHeader from './Components/UnderHeader'
import InfoBlock from './Components/InfoBlock'
import IslandWithVideos from './Components/IslandWithVideos';

function App() {
  return (
    <div className="App">
      <NewHeader />
      {/* <Header /> */}
      <UnderHeader />
      <InfoBlock />
      <IslandWithVideos />
    </div>
  );
}

export default App;
