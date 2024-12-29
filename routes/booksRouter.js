const express = require('express')
const router = express.Router()
const books = require('../Books')


router.get('/',(req,res)=>{
   try {
        res.status(200).json(books)
   } catch (error) {
        res.status(404).json({error:"Books Not Available"})
   }
})


//Select single item using an Id

router.get('/:id',(req,res)=>{
   try {
    const bookId = parseInt(req.params.id)
    const book = books.find((item) => item.id === bookId);

    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json({ error: "Item Not Available" });
    }
    
   } catch (error) {
    res.status(404).json({ error: "Books Not Available" });
   }
})

module.exports = router