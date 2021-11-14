import React from 'react';

//import './styles/global.scss';
import Index from "./components/index";
import { GlobalStyle } from './styles/global';

const App = () => {
  return(
    <>
      <GlobalStyle />    
      <Index />
    </>
  )
}

export default App;
