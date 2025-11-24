export const ProductFormUI = ({ product, errors, onChange, onFileChange, onSubmit, loading}) => {
    return (
    <section>
      <form  className="product-form"onSubmit={onSubmit}>
        <h2>Agregar producto</h2>
        <div>
            <label>Nombre:</label>
            <input type="text" name="name" value={product.name} onChange={onChange} required />
            {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Precio:</label>
            <input type="number" name="price" value={product.price} onChange={onChange} required />
            {errors.price && <p className="error">{errors.price}</p>}
        </div>
        <div>
          <label>Categoria:</label>
            <input type="text" name="category" value={product.category} onChange={onChange} required />
            {errors.category && <p className="error">{errors.category}</p>}
        </div>
        <div>
          <label>Imagen:</label>
            <input type="file" accept="image/*" onChange={(e)=> onFileChange(e.target.files?.[0] ?? null)} />
            {errors.file && <p className="error">{errors.file}</p>}
        </div>
        <button className="btn" type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Cargar Producto"}
        </button>
      </form>

    </section>
  );

};