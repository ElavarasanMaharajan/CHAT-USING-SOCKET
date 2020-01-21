var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

http.listen(3000,function(){
	
	console.log('Running:3000');
});


app.get('/',function(req,res){
	res.sendFile(_dirname+'/index.html');
	
});


io.on('connection', function(socket){
  console.log('a user is connected')
  
  socket.on('chat message', function(msg){
  io.emit('chat message',msg);
});
});

