import React from 'react';
import Appnotification from './notification';
import Appnewsletter from './newsletter';
import Appcontent from './content';
import Appfooter from './footer';
import '../utils/global';

function App() {
  return (
    <div className="App">
      <Appnotification />
      <Appcontent />
      <Appnewsletter />
      <Appfooter />
    </div>
  );
}

export default App;
