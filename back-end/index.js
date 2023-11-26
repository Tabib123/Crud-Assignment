const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


let URI="mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/CRUD4";
let OPTION={user:'testuser7777',pass:'testuser7777',autoIndex:true};
mongoose.connect(URI,OPTION).then((res)=>{
    console.log("Success")
}).catch((err)=>{
    console.log(err)
})


const studentRoutes = require('./src/routes/studentRoutes');
app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
