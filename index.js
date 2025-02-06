const express = require('express');
const app = express();
const port = 3000;
const items = ['Apple', 'Banna', 'Orange'];

app.post('/items', (req,res)=>{
    const item = req.body.item;
    items.push(newItem);
    res.json(items);
});

app.get('/item',(req,res) =>{
    res.json(items);
})
app
// Serve static files from the "public" folder
app.use(express.static('public'));

//Define a route for the home page
app.get('/about', (req, res) => {
    res.send('About Us');
});

//Start the server
app.listen(port, () => {
    console.log(`Server runnning at http://localhost:${port}`);
});

app.use(express.json()); //Middleware to parse JSON bodies

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});