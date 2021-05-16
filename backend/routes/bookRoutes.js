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





module.exports = bookRouter