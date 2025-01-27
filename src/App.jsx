import { useState } from 'react'

import './App.css'
import Navigator from './components/Navigation/Navigator.jsx';
import Router from './components/Navigation/Router.jsx';
import Home from './screens/Home.jsx';
import Counter from './components/Counter/Counter.jsx'
import Product from './screens/Product.jsx';

function App() {

  return (
    <>
      <Navigator />
      <Router />
    </>
  )
}

export default App
