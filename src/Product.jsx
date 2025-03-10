import React from "react"

const product = [
    {id : 1, name : " Laptop", price : "$99", stock : "Available"},
    {id : 2, name : "Phone", price : "$77", stock : "Available"},
    {id : 3, name : "HeadPhone", price : "$90", stock : "Not Available"}
];

function Product(){
    return (
        <>
        {product.map((e) => (
            <div key={e.id}>
                <h2>Product : {e.name} </h2>
                <p>Price : {e.price} </p>
                <p>Stock : {e.stock} </p>
                <hr />
            </div>
        ))}
        </>
    );
}

export default Product;