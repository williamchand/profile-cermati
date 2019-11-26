import React from 'react';
import Appnotification from './notification';
import Appnewsletter from './newsletter';
import Appcontent from './content';
import Appfooter from './footer';
import '../utils/global';
import { uApp } from './styles';

function App() {
  return (
    <div className={uApp}>
      <Appnotification />
      <Appcontent />
      <Appnewsletter />
      <Appfooter />
    </div>
  );
}

export default App;
