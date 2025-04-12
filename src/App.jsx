import {Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Auth Guard
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
        <Header />
        <main style={{ flex: '1 0 auto' }}> {/* Main content grows to fill space */}
          <Routes>
            <Route path="/login" element={  <Login/>} />
            <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
            <Route path="/product/:id" element={<ProtectedRoute> <ProductDetail/> </ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute> <Cart/> </ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </>
  );
}

export default App;