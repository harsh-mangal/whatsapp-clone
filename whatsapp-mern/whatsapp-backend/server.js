// importing
import express from 'express'
// App config
const app = express()
const port = process.env.PORT || 9000
// middleware
// db config
// api routes
app.get('/',(req,res)=>res.status(200).send('Hello world!'))
// listen
app.listen(port ,()=>console.log('listening on port'));
