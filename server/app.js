const path = require("path");
const express = require("express");
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/.well-known/acme-challenge/T3gVcA5EEItuw9udZ5Ag1bRbd4gczD8Acu3uqce6Kow', function (req, res) {
    res.send('T3gVcA5EEItuw9udZ5Ag1bRbd4gczD8Acu3uqce6Kow.wX-8ddMAe0Z1HNLYjFe00cWLx8ugodORKKQxq3_xvVc')
})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
