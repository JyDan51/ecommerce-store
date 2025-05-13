const BASE_URL = 'http://localhost:5000/api/cart';

export const fetchCart = async (token) => {
  const res = await fetch(`${BASE_URL}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const addToCart = async (productId, quantity, token) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity }),
  });
  return res.json();
};

export const removeFromCart = async (productId, token) => {
  const res = await fetch(`${BASE_URL}/remove`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId }),
  });
  return res.json();
};
