import express from 'express'
import router from './bdConect.js'
import router2 from "./routes/routesBd.js"
const port = 4000
const app = express()

app.use(express.json())
app.use(router)
app.use(router2)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})