const express = require("express");
const asycHandler = require("express-async-handler");
const Book = require("../model/Book");


const bookRouter = express.Router()


//create book

bookRouter.post('/', asycHandler(async (req, res) => {
    const book = await Book.create(req.body)

    if (book) {
        res.status(200).json({
            book
        })
    } else {
        res.status(500)
        throw new Error('Book creating failed')
    }
}))


bookRouter.get(
    "/",
    asycHandler(async (req, res) => {
        const book = await Book.find({});
        
        if (book) {
            res.status(200).json({
                book,
      });
    } else {
      res.status(500);
      throw new Error("There are no Books here");
    }
})
);

bookRouter.put('/:id', asycHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (book) {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, req.body,{
                new: true,
                runValidators: true
            }
        )
        res.status(200).json({
            updatedBook
        })
    } else {
        res.status(500);
        throw new Error('Update failed')
    }
}))





module.exports = bookRouter