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
            res.status(200).json(foundBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error 404'
            })
        })
})

books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedBook => {
            console.log(req.body)
            res.status(200).json(updatedBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'An error has occurred, could not edit the book'
            })
        })
})

books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            res.status(200).json({
                message: 'Delete successful'
            })
        })
        .catch(err => {
            res.status(400).json({
                message: 'An error has occurred, could not delete the book'
            })
        })
})

books.post('/', (req, res) => {
    Book.create(req.body)
        .then(createdBook => {
            res.status(200).json(createdBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'An error has occurred, could not create the book'
            })
        })
})

module.exports = books