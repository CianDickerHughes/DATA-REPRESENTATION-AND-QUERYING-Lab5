const express = require('express');
const app = express();
const port = 3000;

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// message route 
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});

// message route of name
app.get('/hello/:fName/:sName', (req, res) => {
    res.send("Hello "+ req.params.fName +" "+ req.params.sName);
});

// 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});