const express = require('express');
const path = require('path');
const fs = require('fs');
const socketio = require("socket.io");
const app = express();

app.use(express.urlencoded({ extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname,'/views')); 


app.get('/', (req, res) => {
  res.render('home');
});


app.get('/login', (req, res) => {
    res.render('login'); 
});

app.get('/Register', (req, res) => {
  res.render('Register'); 
});

app.get('/Store', (req, res) => {
    //const { id } = req.params;
    //const comment = comments.find( c => c.id === id)
    //res.render('comments/show', { comment })
    const imageDir = path.join(__dirname, 'public', 'img', 'Proim', 'shirt');
    const imageFiles = fs.readdirSync(imageDir);
    res.render('Store', { images: imageFiles });
});

app.get('/history', (req, res) => {
  res.render('History'); 
});

app.get('/chat', (req, res) => {
  res.render('Chat'); 
});

app.get('/AddnewProduct', (req, res) => {
  res.render('addnewpd'); 
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.redirect('/')
});

app.get('/comment', (req, res) => {
  res.render('comment'); 
});

app.get('/information', (req, res) => {
  res.render('information'); 
});

app.get('/information/edit', (req, res) => {
  res.render('edit'); 
});

app.get('/purchase', (req, res) => {
  res.render('purchase'); 
});

app.get('/Editproduct', (req, res) => {
  res.render('Editproduct'); 
});




  const server = app.listen(process.env.PORT || 3000, () => {
    console.log("server is running...");
  });
  
  // Initialize socket for the server
  const io = socketio(server);
  
  io.on("connection", socket => {
    console.log("New user connected");
  
    socket.username = "Anonymous"
  
    socket.on("change_username", data => {
      socket.username = data.username
    })
  
    // handle the new message event
    socket.on("new_message", data => {
      console.log("new messsage");
      io.sockets.emit("receive_message", { message: data.message, username: socket.username})
    })
  
    socket.on('typing', data => {
      socket.broadcast.emit('typing', { username: socket.username })
    })
  });


