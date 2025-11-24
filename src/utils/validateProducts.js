export const validateProducts = (products, fileRequired = true) => {
    const errors = {};

    if (!products.name.trim()) {
        errors.name = "El nombre es obligatorio.";
    }

    if (!products.price || products.price <= 0) {
        errors.price = "El precio debe ser mayor a cero.";
    }

    if (!products.category.trim()) {
        errors.category = "La categoría es obligatoria.";
    }

    if (fileRequired && !products.file) {
        errors.file = "Debes seleccionar una imagen.";
    }

    return errors;

};