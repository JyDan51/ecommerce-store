// backend/controllers/orderController.js
const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { items, shippingInfo, paymentMethod } = req.body;
  const order = await Order.create({
    userId: req.user.id,
    items,
    shippingInfo,
    paymentMethod
  });
  res.status(201).json(order);
};
