import { useState } from 'react'
import { faker } from "@faker-js/faker";
import './App.css'

//Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price()
  };
});

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

function ProductList({ title, items }) {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}


function App() {
  return (
    <>
      <ProductList title="Products HOC" items={products} />
    </>
  )
}

export default App
