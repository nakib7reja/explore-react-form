import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products , setNewProducts] = useState([])

    const handleAddProduct = newProduct => {
        const newProducts = [...products, newProduct]
        setNewProducts(newProducts)
    }
    // console.log(products)

    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;