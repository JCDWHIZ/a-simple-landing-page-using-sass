import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Support from './components/Support/Support'
import Info from './components/Info/Info'
import Lounge from './components/Lounge/Lounge'
import Travelers from './components/Travelers/Travelers'
import Suscribers from './components/Suscribers/Suscribers'
import Footer from './components/Footer/Footer'
import './App.css'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers /> 
      <Suscribers /> 
      <Footer />
    </div>
  )
}

export default App
