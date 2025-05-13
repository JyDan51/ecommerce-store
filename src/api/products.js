const BASE_URL = 'http://localhost:5000/api/products';

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}`);
  return res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // optionally include Authorization if secured
    },
    body: JSON.stringify(product),
  });
  return res.json();
};
