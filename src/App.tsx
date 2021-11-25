import React from 'react';

//import './styles/global.scss';
import Index from "./components/index";
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

const App = () => {
  return(
    <TransactionsProvider>
      <GlobalStyle />    
      <Index />
    </TransactionsProvider>
  )
}

export default App;
