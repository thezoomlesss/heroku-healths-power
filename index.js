const express = require('express');
const app = express();

var fs = require('fs');

app.use(express.static('public'));
app.get('/', (req, res) =>{
    res.sendFile('components/index.html', {root: __dirname });
});


app.get('/404', (req, res) =>{
    res.sendFile('components/404.html', {root: __dirname });
});


app.get('/blog-archive', (req, res) =>{
    res.sendFile('components/blog-archive.html', {root: __dirname });
});


app.get('/blog-single', (req, res) =>{
    res.sendFile('components/blog-single.html', {root: __dirname });
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});