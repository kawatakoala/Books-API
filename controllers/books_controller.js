const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')

books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error 404'
            })
        })
})

books.get('/books/:id', () => {
    books.findById(req.params.id)
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error 404'
            })
        })
})