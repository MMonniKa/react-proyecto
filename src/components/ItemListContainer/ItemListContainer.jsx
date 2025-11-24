import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products.js";



export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

  useEffect(() => {
    getProducts(category)
    .then((data) => 
        setProducts(data))
    .catch((err) => {console.log(err);
    });
  }, [category]);
    
    return (
      <section className= "itemlist-container">
           <h1 className= "itemlist-title">Tienda Tortas</h1>
           <div className= "itemlist-grid">
           <ItemList list={products}/>
           </div>
      </section>
    );
};       