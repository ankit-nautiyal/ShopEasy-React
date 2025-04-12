import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Popup from '../components/Popup';
import '../styles/Cart.css';
import { toast } from 'react-toastify';

function Cart() {
    const { cart, updateQuantity, removeItem, clearCart } = useCart();
    const [showPopup, setShowPopup] = useState(false);

    const handleCheckout = () => {
        clearCart();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000); //removes popopup after 4 seconds
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="cart">

            <h2>Your Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.title} />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>${item.price}</p>

                                        <div className="quantity">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                -
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                +
                                            </button>
                                        </div>

                                        <button
                                            className="remove"
                                            onClick={() => { removeItem(item.id); toast.success(`${item.title} removed from cart!`); }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h3>Total: ${totalPrice.toFixed(2)}</h3>
                            <button onClick={handleCheckout}>Checkout</button>
                        </div>
                    </>
                )}

                {showPopup && (
                    <Popup
                        message="Order placed successfully!"
                        onClose={() => setShowPopup(false)}
                    />
                )}
        </div>
    );
}

export default Cart;