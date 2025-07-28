import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../store/slices/cartSlice'
import './CartPage.css'

const CartPage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalItems = useSelector(selectTotalItems)
  const totalCost = useSelector(selectTotalCost)

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }))
  }

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }))
  }

  const handleCheckout = () => {
    alert('Coming Soon! 🚀')
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h2 className="page-title">Shopping Cart</h2>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add some beautiful plants to get started!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h2 className="page-title">Shopping Cart</h2>

        <div className="cart-summary">
          <div className="summary-item">
            <span>Total Items:</span>
            <span className="summary-value">{totalItems}</span>
          </div>
          <div className="summary-item">
            <span>Total Cost:</span>
            <span className="summary-value">${totalCost.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">{item.image}</div>
              <div className="item-details">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-price">${item.price} each</p>
              </div>
              <div className="item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => handleDecreaseQuantity(item.id)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage