import mysql from "mysql2/promise"

import { Router } from "express"


export const conect = mysql.createPool({
    host: "",
    user: "",
    port: "",
    password: "",
    database: "",
})


const router = Router()


router.get("/", async (req, res) => {
    const [rows] = await conect.query("SELECT * FROM empleado")
    console.log(rows)
    res.json(rows)
})

export default router
