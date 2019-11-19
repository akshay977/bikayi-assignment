// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/bikayi-assignment'));
// console.log("using the file:" + __dirname + '/dist/bikayi-assignment')


// app.get('/*', function (req, res) {
//   console.log("sending index.html");
//   res.sendFile(path.join(__dirname + '/dist/bikayi-assignment/index.html'));
// });

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080 || 3000);

// console.log("Console listening!");


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/app'));

app.get('/*', function (req, res) {
  console.log(/dist/bikayi - assignment / index.html)
  res.sendFile(path.join(__dirname, '/dist/app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
