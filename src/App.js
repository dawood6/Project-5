import React from 'react';
import Intro from './Components/Intro';
import Poll from './Components/Poll'
import Hashtag from './Components/Hashtag';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <Poll />
      <Hashtag />
      <Footer />
    </div>
  );
}

export default App;
