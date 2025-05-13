// ProductPage.jsx - Страница товара с секцией "Related Products"
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../style/ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

    fetch(`/api/products/related/${id}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='product-page'>
      <div className='product-details'>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>

      <div className='related-products'>
        <h3>Related Products</h3>
        <div className='related-list'>
          {relatedProducts.map((item) => (
            <div className='related-card' key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price} €</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
