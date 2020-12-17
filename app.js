

 const express = require('express');
 const socketio = require('socket.io');
 const app = express();

//express template engine
 app.set('view engine', 'ejs')

 //Middleware to send our public assets
 app.use(express.static('./public'))

 //get route
 app.get( '/', (req,res) => {
 		res.render('index') //this is rendering our file inside views -> we dont need to specific the whole path because we set our view engine above!
 		//res.send("getting root!!!");
 		}
 	);


const server = app.listen(process.env.PORT || 5000, () => {
 				console.log("server is running")}
 				);

 //Initialize socket from our server
 const io = socketio(server)

//set up an even. it gets triggered every time a new connection to the socket gets established
 io.on('connection', socket =>{
 		console.log("New user connected")
 	})