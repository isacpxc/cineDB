const express = require('express');
const app = express();

const port = 8080;

app.listen(port, ()=>{
  console.log(`Running on port ${port} \uD83D\uDE80`);
})