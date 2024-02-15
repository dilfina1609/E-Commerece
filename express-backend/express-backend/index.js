const port=8080

const express=require("express")
const app=express()
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel = require('./models/Users')

app.use(express.json());
app.use(cors());
//database connection with mongodb

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create Product model
const Product = mongoose.model("Products", productSchema);

app.get("/fetch", (req, res)=>{
    res.send("msg received")
    }
    )

// GET endpoint to fetch all products
app.get("/products", async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();
    res.json(products); // Send the products as JSON response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/login', (req, res)=> {
  const {email, password} = req.body
  UserModel.findOne({email: email})
  .then(user =>{
    if(user) {
      if(user.password === password){
        res.json('login Success')
      }
      else {
        res.json('Password is incorrect')
      }
    }
    else {
      res.json('user is not registered')
    }
  })
})

app.post('/register', (req, res)=>{
  console.log('incomunf req', req.body)
  UserModel.create(req.body)
  .then(user => res.json(user))
  .catch(error => res.json(error))
})


app.listen(port, (error)=>{
    if(!error)
    {
        console.log("server running on port")
    }
    else{
        console.log("error",error)
    }

})