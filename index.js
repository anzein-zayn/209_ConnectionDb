import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const {Pool} = pg

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '12345',
    port: 5432,
})

app.get('/', (req, res, next) => {
    console.log("TEST DATA");
    pool.query('Select * from biodata')
        .then(testData  => {
            res.send(testData.rows)
        })
        .catch(err => {
            console.error(err)
            res.status(500).send('internal server error')
        });
    })

app.listen(port,() =>{
    console.log(`App running on port ${port}`)
})