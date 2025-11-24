import { ProductFormUI } from "../ProductFormUI/ProductFormUl";
import { useState } from "react";
import { validateProducts } from "../../../utils/validateProducts.js";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";
import "../ProductFormContainer/ProductFormContainer.css";


export const ProductFormContainer = () => {
    const [loading, setloading] = useState(false);
    const [errors, setErrors] = useState("");
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        setErrors({});

        const newErrors = validateProducts({...product, file});
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setloading(false);
            return;
        }

        try {
            const imageUrl = await uploadToImgbb(file);
            const productData = {
                ...product, price: Number(product.price), imageUrl,
            };

            await createProduct(productData);
            alert("Producto cargado con éxito");
            setProduct({
                name: "",
                price: "",
                category: "",
            });
            setFile(null);

        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setloading(false);
        }
    };
    
    return (
    <ProductFormUI  product={product} errors={errors} onChange={handleChange} onFileChange={setFile} loading={loading} onSubmit={handleSubmit}/>
    );
};
