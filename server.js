const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"))
});
app.listen(process.env.PORT || 5060, () => {
    console.log("server started!");
});
