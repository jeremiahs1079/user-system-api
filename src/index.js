const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res) => res.send("App Works!"));

app.listen(port, (err) => {
    console.log(`Running Service on port: ${port}`);
});

