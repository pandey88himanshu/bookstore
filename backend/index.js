const express = require ('express')
const app = express();
const cors = require('cors')
const bookRoutes = require('./routes/bookRoute')
require('./db/db')
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use('/api/v1',bookRoutes)


app.listen(process.env.PORT,()=>{
    console.log('server started')
})