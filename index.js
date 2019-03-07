const express = require('express');
const server = express();
const Users = require('./api/users-model')
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json('We Out Hur')
});

server.get('/users', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });
  
server.post('/users', (req, res) => {
    
});
server.delete('/users', (req, res) => {
    
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));