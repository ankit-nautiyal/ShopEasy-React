import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
        return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
        setCart((prev) => prev.filter((item) => item.id !== id));
        } else {
        setCart((prev) =>
            prev.map((item) =>
            item.id === id ? { ...item, quantity } : item
            )
        );
        }
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeItem,
                clearCart,
                cartCount,
            }}
            >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);