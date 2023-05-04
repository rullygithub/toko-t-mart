import React, { useEffect, useState } from 'react'
import Product from './Product';

function ProductList() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response => {
            if(!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json();
        })
        .then(data => setProducts(data))
        .catch(error => setError(error))
    }, []);

    if(error) {
        return <div>{error.message}</div>
    }

  return (
    <div>
        {products.map(product => (
            <Product
                key={product.idMeal}
                name={product.strMeal}
                image={product.image}
            />
        ))}
    </div>
  )
}

export default ProductList