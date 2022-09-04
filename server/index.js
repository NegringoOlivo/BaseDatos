import express from 'express'
import router from './bdConect.js'
import router2 from "./routes/routesBd.js"
const port = 4000
const app = express()

app.use(express.json())
app.use(router)
app.use(router2)

const arreglo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5}

console.log("respuesta arreglo: " + arreglo[0])
console.log("respuesta arreglo: " + obj[1])


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})