const express = require("express");
const cors = require("cors");
const CarcenterRouter = require("./routes/carcenter.router");
const PORT = 3000;
const db = require("./models/index");
const role = db.role
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


/* db.sequelize.sync({force: true}).then(() => {
    console.log("Hello World! Drop and resync your database");
    initial();
}); */

function initial() {
    role.create({
        id:1,
        name: "user"
    }),
    role.create({
        id:2,
        name: "admin"
    });
}

//create service
const app = express();

//Use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
});



app.use("/" , CarcenterRouter);
require("./routes/auth.router")(app);

app.listen(PORT, ()=> {
    console.log("Server connect on http://localhost:" + PORT)
})
