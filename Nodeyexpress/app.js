const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname,'index.html'))
})
app.get('/producto.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'producto.html'))
 })
app.get('/nosotros.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'nosotros.html'))
})
 
      

app.listen(port, () => {
    console.log( `Example app listening at http://localhost:${port}` )
})