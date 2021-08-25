const billboardTop100 = require("billboard-top-100")
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.set("view engine","ejs"); 
var o1 = 0
var o2 = 0
var o3 = 0
var o4 = 0
var o5 = 0
var ip = [];

function chart() {
billboardTop100.getChart((err, chart) => {
  if (err) console.log(err);
global.chart1 = chart
});
}

chart();
app.get('/', function(req, res) {
    res.render('voting.ejs');
});

app.get('/chart', function(req, res) {
res.send(chart1);
});


io.on('connection', function(socket){
io.emit('update', {b1: `${o1}`, b2: `${o2}`, b3: `${o3}`, b4: `${o4}`, b5: `${o5}`});  
   
socket.on('bt1', function(){
     var ipi = ip.includes(socket.handshake.headers['x-forwarded-for'])
      if (ipi == false) {
      o1 += 1
      io.emit('update', {b1: `${o1}`, b2: `${o2}`, b3: `${o3}`, b4: `${o4}`, b5: `${o5}`});
      ip.push(socket.handshake.headers['x-forwarded-for'])
      }
   });




    socket.on('bt2', function(){
      var ipi = ip.includes(socket.handshake.headers['x-forwarded-for'])
      if (ipi == false) {
      o2 += 1
      io.emit('update', {b1: `${o1}`, b2: `${o2}`, b3: `${o3}`, b4: `${o4}`, b5: `${o5}`});
      ip.push(socket.handshake.headers['x-forwarded-for'])
      }
   });




    socket.on('bt3', function(){
       var ipi = ip.includes(socket.handshake.headers['x-forwarded-for'])
      if (ipi == false) {
      o3 += 1
      io.emit('update', {b1: `${o1}`, b2: `${o2}`, b3: `${o3}`, b4: `${o4}`, b5: `${o5}`});
       ip.push(socket.handshake.headers['x-forwarded-for'])
      }
   });




    socket.on('bt4', function(){
       var ipi = ip.includes(socket.handshake.headers['x-forwarded-for'])
      if (ipi == false) {
      o4 += 1
      io.emit('update', {b1: `${o1}`, b2: `${o2}`, b3: `${o3}`, b4: `${o4}`, b5: `${o5}`});
       ip.push(socket.handshake.headers['x-forwarded-for'])
      }
   });




    socket.on('bt5', function(){
       var ipi = ip.includes(socket.handshake.headers['x-forwarded-for'])
      if (ipi == false) {
      o5 += 1
      io.emit('update', {b1: `${o1}`, b2: `${o2}`, b3: `${o3}`, b4: `${o4}`, b5: `${o5}`});
       ip.push(socket.handshake.headers['x-forwarded-for'])
      }
   });
});



server.listen(3000, () => {
  console.log('listening on *:3000');
});
