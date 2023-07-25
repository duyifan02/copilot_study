// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import database
const db = require('./db');

// Create web server
const app = express();

// Apply middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create route
app.get('/comments', (req, res) => {
    res.send(
        db.comments
    );
}
);

// Create route
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    db.comments.push(comment);
    res.send(
        comment
    );
}
);

// Start web server
app.listen(process.env.PORT || 8081);

