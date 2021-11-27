// const express = require("express");
// const routes = require("./routes")
// require('dotenv').config()

// const app = express();

// app.use(express.json());


// app.use("/api", routes.productRoutes)
// // app.use("/api", routes.cartRoutes)
// // app.use("/api", routes.userRoutes)

// // const PORT = process.env.PORT || 5000
// const PORT =  5000

// app.listen(PORT, () => console.log(`Running on port ${PORT}`))

// module.exports = app


const express = require("express");
const routes = require("./routes")
require('dotenv').config()

const app = express();

app.use(express.json());


app.use("/api", routes.productRoutes)
app.use("/api", routes.cartRoutes)   
// app.use("/api", routes.userRoutes)

const PORT = process.env.PORT || 5000

// app.listen(PORT, () => console.log(`Running on port ${PORT}`))
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Running on port ${PORT}`))
} 

module.exports = app