// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors')
const app = express();

app.use(cors())


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/BarberShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Define a MongoDB schema for orders
const orderSchema = new mongoose.Schema({
  name: String,
  SpecialOrder: String,
  Email: String,
  PhoneNumber: Number,
});

const Order = mongoose.model('Order', orderSchema);

// Set up middleware to parse JSON data from requests
app.use(express.json());

// Create a route to receive and save orders
app.post('/submit-order', async (req, res) => {
  try {
    const orderData = req.body;
    const order = new Order(orderData);
    await order.save();
    res.status(201).json({ message: 'Order saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
