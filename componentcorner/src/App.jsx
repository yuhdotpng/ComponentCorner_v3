import './App.css'
import ProductCard from './assets/components/ProductCard';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import CartItem from './assets/components/CartItem';
import Footer from './assets/components/Footer';
import {useState} from 'react';
function App() {

  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(previousCart => [...previousCart, product]);
    console.log(cart)
  };

  const removeFromCart = (indexToRemove) => { 
    console.log('Index to remove: ', indexToRemove)
    setCart(previousCart => previousCart.filter((item, index) => index !== indexToRemove)
   );
  };

  const cartTotal = cart.reduce((total, product) => total + product.price , 0)

  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];
  return (
    <div className="app">
      <Header
      name = 'ComponentCorner'
      page1= 'Home'
      page2= 'Contact'
      page3= 'About' 
      cart_count={cart.length}
      />
      <Hero
      title = 'Welcome to Component Corner'
      image = 'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics'
      alt = 'Shop electronics banner'
      subtitle= 'Discover amazing products built with React components'
      callToAction='Shop Now'
      />
      <h1>Featured Products</h1>
      {products.map(product =>(
        <ProductCard
          product = {product}
          key = {product.id}
          name = {product.name}
          price = {product.price}
          description = {product.description}
          image = {product.image}
          onAddToCart = {addToCart}
      />
      ))}
      {cart.length > 0 ? (
        cart.map((item, index) => (
        <CartItem
        item = {item}
        itemIndex = {index}
        name = {item.name}
        price = {item.price}
        onRemoveFromCart = {removeFromCart}
        />
      )) 
      )
      : (
        <div className='empty-cart'> 
          <h2> Your cart is empty! </h2>
        </div>
      )}
     

    {cartTotal > 0 && (
      <p>Total: {cartTotal}</p>
    )}
      
      <Footer
        title = 'Component Corner'
        email = 'CompCorner@example.com'
        pNum = '(266) 766-3682'
        address = '123 React Street, Component City, RC 12345'
      />
    </div>
  );
}


export default App;
