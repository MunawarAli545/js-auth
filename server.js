const express = require('express');
const bodyparser = require('body-parser');
const authenticationRoutes = require('./src/routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

authenticationRoutes(app);

app.get('/', (req, res) => {
     res.send("Welcome home ");
    });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})