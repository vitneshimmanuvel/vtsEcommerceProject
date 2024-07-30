import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ProductList() {
    
    const [products, setProducts] = useState([]);
    const location = useLocation();

    let category = localStorage.getItem("catogory")

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const searchParams = new URLSearchParams(location.search);
    //         const category = searchParams.get('catogory');

    //         if (category) {
    //             const response = await fetch(`/products?category=${category}`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setProducts(data);
    //             } else {
    //                 console.error('Failed to fetch products');
    //             }
    //         }
    //     };

    //     fetchProducts();
    // }, [location]);

    useEffect(() => {
        console.log(category)
        axios.post("http://127.0.0.1:3000/category",{category})
        .then((result) => {
            console.log(result.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    return (
        <div>
            <h1>Product List sample text page  {category}</h1>
            <div id="product-list">
                {products.map(product => (
                    <div key={product._id} className="product-card button-round " >
                        <h2>{product.p_name}</h2>
                        <img className="product-image" src={product.image} alt={product.p_name} />
                        <p><strong>Category:</strong> {product.catogory}</p>
                        <p><strong>Description:</strong> {product.p_desc}</p>
                        <p><strong>Price:</strong> ${product.p_price}</p>
                        <p><strong>Status:</strong> {product.status}</p>
                        <p><strong>Quantity:</strong> {product.p_qty}</p>
                        <p><strong>Rating:</strong> {product.rate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}