const express = require('express')
const path = require('path') //used to identify the path of the file
const booksRouter = require('./routes/booksRouter')
const app = express()


app.use('/books',booksRouter)


app.listen(3000,()=>{
    console.log("Server started...")
})