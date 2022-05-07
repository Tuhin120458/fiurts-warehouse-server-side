import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (


        <div>
            <h2>this is products</h2>
            <div>
                {/* {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                } */}
            </div>
        </div>

    );
};

export default Products;