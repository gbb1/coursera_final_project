import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
import './ProductPage.css'

const ProductPage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const plants = [
    // Low Light Plants
    {
      id: 1,
      name: "Snake Plant",
      price: 24.99,
      image: "🌿",
      category: "Low Light",
      description: "Perfect for beginners, thrives in low light conditions"
    },
    {
      id: 2,
      name: "ZZ Plant",
      price: 34.99,
      image: "🌱",
      category: "Low Light",
      description: "Drought-tolerant and low maintenance"
    },

    // Medium Light Plants
    {
      id: 3,
      name: "Monstera Deliciosa",
      price: 49.99,
      image: "🍃",
      category: "Medium Light",
      description: "Iconic split-leaf philodendron"
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      price: 79.99,
      image: "🌳",
      category: "Medium Light",
      description: "Popular statement plant for home decor"
    },

    // Bright Light Plants
    {
      id: 5,
      name: "Succulent Collection",
      price: 19.99,
      image: "🌵",
      category: "Bright Light",
      description: "Set of 3 colorful succulents"
    },
    {
      id: 6,
      name: "Bird of Paradise",
      price: 89.99,
      image: "🌺",
      category: "Bright Light",
      description: "Tropical beauty with large leaves"
    }
  ]

  const categories = ["Low Light", "Medium Light", "Bright Light"]

  const handleAddToCart = (plant) => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }))
  }

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId)
  }

  return (
    <div className="product-page">
      <div className="container">
        <h2 className="page-title">Our House Plants</h2>
        <p className="page-subtitle">Find the perfect plant for your space</p>

        {categories.map(category => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category} Plants</h3>
            <div className="products-grid">
              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <div key={plant.id} className="product-card">
                    <div className="product-image">{plant.image}</div>
                    <div className="product-info">
                      <h4 className="product-name">{plant.name}</h4>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-price">${plant.price}</p>
                      <button
                        className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductPage
