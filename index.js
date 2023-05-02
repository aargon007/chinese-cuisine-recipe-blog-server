const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef_container.json');
const trending = require('./data/trending.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running')
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/trending', (req, res) => {
    res.send(trending);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id == id);
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`server API is running on port: ${port}`)
})