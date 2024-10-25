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

// json of movies
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({ movies });
});

// 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});