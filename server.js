//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-todo'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/my-todo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// npm install express path --save
// "start": "node server.js",
// "postinstall": "ng build --prod"
//     "engines": {
//     "node": "10.16.0",
//         "npm": "6.9.0"
// },
// "typescript": "~3.7.5",