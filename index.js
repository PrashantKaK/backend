const connectToMongo = require('./db.js');
const express = require('express');
const app = express();
const cors = require('cors')

connectToMongo();

app.use(express.json());
app.use(cors())

const port = 8000;

// http://localhost:8000/user/
app.get('/test', (req, res) => { res.send("Test API")})
app.use('/user', require("./Router/createAPI.js"));
// app.use('/riddle', require('./routes/tads_riddles.js'));

app.listen(port, () => {
    console.log(`my port listening at http://localhost:${port}`)
})