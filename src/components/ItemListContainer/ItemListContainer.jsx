import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";



export const ItemListContainer = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch("/data/products.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
    })
    .then((data) => {setProducts(data); 
    })
    .catch((err) => {console.log(err);
    });
}, []);
    
    return(
      <section className= "itemlist-container">
           <h1 className="itemlist-title">Tienda Tortas</h1>
           <div className="itemlist-grid">
           <ItemList list={products}/>
           </div>
      </section>
    );
};