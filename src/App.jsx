import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header />
        <main style={{ flex: '1 0 auto' }}> {/* Main content grows to fill space */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      
        <Footer />
    </>
  );
}

export default App;