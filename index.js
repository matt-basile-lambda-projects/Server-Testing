const express = require('express');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json('We Out Hur')
});

server.get('/users', (req, res) => {
    
});
server.post('/users', (req, res) => {
    
});
server.delete('/users', (req, res) => {
    
});
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));