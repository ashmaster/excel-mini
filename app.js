const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/cjump',function(req,res){
  res.sendFile(path.join(__dirname+'/games/cjump/dist/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/puzzle',function(req,res){
  res.sendFile(path.join(__dirname+'/games/cub-n-puppuzzle-game-demo/dist/index.html'));
});

router.get('/menja',function(req,res){
  res.sendFile(path.join(__dirname+'/games/menja/dist/index.html'));
});
router.get('/tower',function(req,res){
    res.sendFile(path.join(__dirname+'/games/tower-blocks/dist/index.html'));
  });

//add the router
app.use('/', router);
app.use(express.static('games'));
app.listen(process.env.port || 2000);

console.log('Running at Port 3000');