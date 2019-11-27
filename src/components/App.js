import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Appnotification from './notification';
import Appnewsletter from './newsletter';
import Appcontent from './content';
import Appfooter from './footer';
import '../utils/global';
import { uApp } from './styles';

function App() {
  return (
    <CookiesProvider>
      <div className={uApp}>
        <Appnotification />
        <Appcontent />
        <Appnewsletter />
        <Appfooter />
      </div>
    </CookiesProvider>
  );
}

export default App;
