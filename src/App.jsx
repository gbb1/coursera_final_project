import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import LandingPage from './components/LandingPage'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'landing' && <LandingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && <ProductPage />}
        {currentPage === 'cart' && <CartPage />}
      </main>
    </div>
  )
}

export default App
