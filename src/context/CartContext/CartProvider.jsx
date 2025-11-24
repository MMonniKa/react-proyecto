import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const exists = (id) => {
        const exist = cart.some (p => p.id === id)
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            alert("El producto ya existe en el carrito");
            return;
        }
        const newItem = {...item, quantity: item.quantity || 1};
        setCart([...cart, newItem]);
        alert(`${item.name} agregado al carrito`);
    };

    const deleteItem = (id) => {
        const filtered = cart.filter (p => p.id !== id);
        setCart(filtered);
        alert("Producto eliminado del carrito");
    };

    const clearCart = () => {
        setCart([])
    };

    const getTotalItems = () => {
        if (cart.length) {
           return cart.length;
        }
    };

    const total = () => {
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return Math.round(total * 100) / 100;
    };

    const checkout = () => {
        const ok = confirm("¿Desea finalizar la compra?");
        if (ok) {
          alert("Compra realizada con exito");
            clearCart();
        }
    };

    const values = {
        cart,
        addItem,
        clearCart,
        getTotalItems,
        deleteItem,
        total,
        checkout
    };
    
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
}