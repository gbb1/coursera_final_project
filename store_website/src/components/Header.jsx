import { useSelector } from 'react-redux'
import { selectTotalItems } from '../store/slices/cartSlice'
import './Header.css'

const Header = ({ currentPage, setCurrentPage }) => {
  const totalItems = useSelector(selectTotalItems)

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">🌱 Plant Store</h1>
        <nav className="nav">
          <button
            className={`nav-button ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => setCurrentPage('products')}
          >
            Products
          </button>
          <button
            className={`nav-button ${currentPage === 'cart' ? 'active' : ''}`}
            onClick={() => setCurrentPage('cart')}
          >
            Cart
          </button>
        </nav>
        <div className="cart-icon"
          onClick={() => setCurrentPage('cart')}
        >
          🛒 <span className="cart-count">{totalItems}</span>
        </div>
      </div>
    </header>
  )
}

export default Header