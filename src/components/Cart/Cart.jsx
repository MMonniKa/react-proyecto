import "./Cart.css";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart, total, checkout, deleteItem } = useCartContext();

    return (
      <section className="item-list-container">
        <h2>Carrito de Compras</h2>
       {cart.length ? (
        cart.map((prod) => (
            <div key={prod.id} className="cart-item">
               <img src={prod.imageUrl} alt={prod.name} />
               <div className="cart-info">
                 <h3>{prod.name}</h3>
                 <p>Precio: ${prod.price}</p>
                 <p>Cantidad: {prod.quantity}</p>
               </div>
               <button className="btn" onClick={() => deleteItem(prod.id)}>Eliminar</button>
               </div>
  ))
) : (
  <p>El carrito está vacío</p>
)}

      {cart.length ? (
            <div className="btn-container">
            <div className="total-pagar">
                <p>Total a pagar: ${total()}</p>
            </div>
            <button className="btn" onClick={checkout}>Finalizar Carrito</button>
            <button className="btn" onClick={clearCart}>Vaciar Carrito</button>
        </div>
      ):(
        <Link className="btn" to="/">Volver al inicio</Link>
      )}
      </section>
      );

};
