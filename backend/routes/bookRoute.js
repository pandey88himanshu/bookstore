const router = require("express").Router();
const bookModel = require('../model/bookModel');
//post request
router.post("/add",async (req,res)=>{
    try{
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message: "Book Added Successfully"})
        })
    }
    catch(error){
        console.log(error)
    }
})

//get request

router.get("/getBook", async(req,res)=>{
    let books;
    try{
    books = await bookModel.find()
    res.status(200).json({books})
    }
    catch(error){
        console.log(error)
    }
})

//get reqest by id
router.get('/getBook/:id',async(req,res)=>{
let book;
const id = req.params.id;
try{
book = await bookModel.findById(id);
res.status(200).json({book})
}
catch (error){
console.log(error)
}
})

//update by id
router.put('/updateBook/:id',async(req,res)=>{
const id = req.params.id;
const {bookname,description,author,image,price} = req.body;
let book;
try{
    book = await bookModel.findByIdAndUpdate(id,{
        bookname,
        description,
        author,
        image,
        price,
    })
    book = await book.save().then(()=>res.json({message: "Data Updated"}));
}
catch(error){
    console.log(error);
}
})

//delete book by id
router.delete('/deleteBook/:id',async(req,res)=>{
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(()=>res.json({message:"Deleted Successfully"}))
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;