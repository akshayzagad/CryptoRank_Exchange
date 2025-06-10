import { useState } from 'react'
import './App.css'
import Currency from './component/Currency';


function App() {
  const title = "Cryptocurrency Exchange";

  return (
    <>
      <h8k-navbar header={title}></h8k-navbar>
      <Currency />
    </>
  );
}

export default App
