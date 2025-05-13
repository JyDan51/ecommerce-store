const BASE_URL = 'http://localhost:5000/api/orders';

export const placeOrder = async (orderData, token) => {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  });
  return res.json();
};
