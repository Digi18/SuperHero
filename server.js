const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(require('./Routes/createHero'));

app.listen(port,(req,res) => {

    console.log(`Server is running on port ${port}`);
});
