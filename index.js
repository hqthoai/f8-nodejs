const express = require ('express')
const app = express();
const port = 3000;

app.get('/', (req,res)=> res.send("Hello Everyon"));

app.listen(port,() => console.log(`Example app is running on localhost at port:${port}`));

