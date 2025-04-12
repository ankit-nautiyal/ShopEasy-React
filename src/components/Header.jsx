import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

function Header() {
    const { cartCount } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="header">
            <nav className='navbar'>
                <ul className='navItems'>
                    <div className='leftNav'>
                        <li className="logo">
                            <img src="logo.png" alt="Logo" />
                            <Link to="/">ShopEasy</Link>
                        </li>
                            
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </div>
                    
                    <div className='rightNav'>
                        <li>
                            <Link to="/cart">Cart ({cartCount})</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </div>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Header;