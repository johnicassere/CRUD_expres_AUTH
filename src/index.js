require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/user.route');
const authRoute = require("./routes/auth.route");
const swaggerRoute = require("./routes/swagger.route");
const connectToDatabase = require('./database/database');


const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

connectToDatabase();



app.use('/users', routes);
app.use("/auth", authRoute);
app.use("/api-docs", swaggerRoute);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
