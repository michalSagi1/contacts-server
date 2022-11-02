const express = require("express");
const sequelize = require("./database")
const User = require("./model")
const app = express();
const cors = require('cors');

const PORT = 3005;

app.use(cors());
app.use(express.json());
app.use('/', require('./Routes'))
sequelize.sync().then(() => console.log("db is ready"))


app.listen(PORT, () => console.log(`Server Up: ${PORT}`))

