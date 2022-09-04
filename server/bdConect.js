import mysql from "mysql2/promise"

import { Router } from "express"


export const conect = mysql.createPool({
    host: "qa-instance-1.cbzrm1rfcw7j.us-east-1.rds.amazonaws.com",
    user: "techtest",
    port: 3306,
    password: "zf4SE4WBXq",
    database: "technical_test",
})


const router = Router()


router.get("/", async (req, res) => {
    const [rows] = await conect.query("SELECT * FROM empleado")
    console.log(rows)
    res.json(rows)
})


export default router
