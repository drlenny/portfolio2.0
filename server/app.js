const path = require("path");
const express = require("express");
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/.well-known/acme-challenge/X1sLpvil-MVm0_Cs0EYrWpaahn8PF4BojDJxeGxWDaw', function (req, res) {
    res.send('X1sLpvil-MVm0_Cs0EYrWpaahn8PF4BojDJxeGxWDaw.wX-8ddMAe0Z1HNLYjFe00cWLx8ugodORKKQxq3_xvVc')
})


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
