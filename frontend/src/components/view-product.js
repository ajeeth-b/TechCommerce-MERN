import { React, useEffect, useState } from "react";
import ProductsList from "./display-product/products-list";

function ViewProduct() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products').then((res) => {
            return res.json();
        }).then((data) => {
            setProducts(data);
        });
    }, []);
    return (
        <div>
            <ProductsList products={products} />
        </div>
    )
}

export default ViewProduct