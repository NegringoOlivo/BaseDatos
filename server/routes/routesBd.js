import {  Router } from "express";
import { conect } from "../bdConect.js";
import { questions } from "../controller/controllerBD.js";

const router = Router()


router.get('/1', async (req, res) => {
    const [rows] = await conect.query("SELECT distinct apellido1 FROM empleado")
    console.log(questions[1])
    console.log(rows)
    res.json(rows)
})

router.get('/2', async (req, res) => {
    const [rows] = await conect.query("SELECT CONCAT(`nombre`, ' ', `apellido1`, ' ', `apellido2`) FROM `empleado` WHERE `apellido2` IS NOT NULL")
    console.log(questions[2])
    console.log(rows)
    res.json(rows)
})
router.get('/3', async (req, res) => {
    const [rows] = await conect.query("SELECT nombre, presupuesto FROM departamento ORDER BY presupuesto ASC")
    console.log(questions[3])
    console.log(rows)
    res.json(rows)
})
router.get('/4', async (req, res) => {
    const [rows] = await conect.query("SELECT apellido1, apellido2, nombre FROM empleado ORDER BY apellido1 ASC")
    console.log(questions[4])
    console.log(rows)
    res.json(rows)
})
router.get('/5', async (req, res) => {
    const [rows] = await conect.query("SELECT nombre, presupuesto FROM departamento ORDER BY presupuesto ASC LIMIT 3")
    console.log(questions[5])
    console.log(rows)
    res.json(rows)
})
router.get('/6', async (req, res) => {
    const [rows] = await conect.query("SELECT nombre FROM departamento WHERE presupuesto<100000 OR presupuesto>200000")
    console.log(questions[6])
    console.log(rows)
    res.json(rows)
    
})

router.get('/7', async (req, res) => {
    const [rows] = await conect.query("SELECT * FROM empleado WHERE apellido2 IS NULL")
    console.log(questions[7])
    console.log(rows)
    res.json(rows)
    
})

router.get('/8', async (req, res) => {
    const [rows] = await conect.query("SELECT nombre, apellido1, apellido2, nif, codigo_departamento from empleado WHERE codigo_departamento IN(2, 4, 5)")
    console.log(questions[8])
    console.log(rows)
    res.json(rows)
    
})


router.get('/9', async (req, res) => {
    const [rows] = await conect.query("SELECT * FROM empleado, departamento WHERE empleado.codigo_departamento = departamento.codigo")
    console.log(questions[9])
    console.log(rows)
    res.json(rows)
    
})


router.get('/10', async (req, res) => {
    const [rows] = await conect.query("SELECT * FROM empleado, departamento WHERE empleado.codigo_departamento = departamento.codigo ORDER BY departamento.nombre, empleado.apellido1, empleado.apellido2, empleado.nombre")
    console.log(questions[10])
    console.log(rows)
    res.json(rows)
    
})


router.get('/11', async (req, res) => {
    const [rows] = await conect.query("SELECT nombre, presupuesto  FROM departamento ORDER BY presupuesto LIMIT 1")
    console.log(questions[11])
    console.log(rows)
    res.json(rows)
    
})


router.get('/12', async (req, res) => {
    const [rows] = await conect.query("SELECT departamento.nombre, COUNT(codigo_departamento) FROM empleado, departamento WHERE empleado.codigo_departamento = departamento.codigo GROUP BY codigo_departamento HAVING COUNT(codigo_departamento)>2")
    console.log(questions[12])
    console.log(rows)
    res.json(rows)
    
})



router.get('/13', async (req, res) => {
    const [rows] = await conect.query("SELECT nombre, presupuesto FROM departamento ORDER BY presupuesto DESC LIMIT 1")
    console.log(questions[13])
    console.log(rows)
    res.json(rows)
    
})



router.get('/14', async (req, res) => {
    const [rows] = await conect.query("SELECT nombre FROM departamento WHERE codigo IN(SELECT codigo_departamento FROM empleado WHERE codigo_departamento IS NOT NULL)")
    console.log(questions[14])
    console.log(rows)
    res.json(rows)
    
})

router.get('/15', async (req, res) => {
    const [rows] = await conect.query("SELECT * FROM empleado LEFT JOIN departamento ON empleado.codigo_departamento = departamento.codigo WHERE empleado.codigo_departamento IS NOT NULL OR empleado.codigo_departamento IS NULL")
    console.log(questions[15])
    console.log(rows)
    res.json(rows)
    
})

router.get('/16', async (req, res) => {
    const [rows] = await conect.query("SELECT empleado.nombre, departamento.nombre FROM empleado RIGHT JOIN departamento ON empleado.codigo_departamento = departamento.codigo WHERE empleado.codigo_departamento IS NULL OR departamento.codigo IS NULL ORDER BY departamento.nombre")
    console.log(questions[16])
    console.log(rows)
    res.json(rows)
    
})

export default router