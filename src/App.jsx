import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './component/Context/CardContext';
import Header from './component/Header.jsx';
import Home from './component/Home.jsx';
import ProductList from './component/ProductList.jsx';
import ProductDetail from './component/ProductDetail.jsx';
import Cart from './component/cart.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App
