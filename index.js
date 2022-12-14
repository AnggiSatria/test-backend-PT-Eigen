const express = require("express")
const cors = require("cors")
require("dotenv").config
const router = require('./src/routes')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use("/api/v1/", router)


app.listen(port, () => console.log(`Server Run On Port ${port}`))