const Model = require('../models/model');
const express = require('express');
const router =  express.Router();

router.post('/books', async (req, res) => {
    const createdAtStr = new Date().toISOString();
    const updatedAtStr = new Date().toISOString();

    const data = new Model(
        {
        author : req.body.author,
        title : req.body.title,
        genre : req.body.genre,
        readPage : req.body.readPage,
        pageCount : req.body.pageCount,
        finished : false,
        createdAt : createdAtStr,
        updatedAt : updatedAtStr
        
    });

    if(req.body.readPage === req.body.pageCount || req.body.readPage > req.body.pageCount){
        if(req.body.readPage === req.body.pageCount){
        const data = new Model(
            {
            author : req.body.author,
            title : req.body.title,
            genre : req.body.genre,
            readPage : req.body.readPage,
            pageCount : req.body.pageCount,
            finished : true,
            createdAt : createdAtStr,
            updatedAt : updatedAtStr
            
            })
            try{
                const dataSave = await data.save();
                res.status(200).json(dataSave);
                // res.send(__dirname + '../views/register_book.html');
            }catch(err){
                res.status(400).send(err);
            }
        }
        if(req.body.readPage > req.body.pageCount){
            res.status(500).send('Read Page tidak boleh melebihi page count');
        }
    }

    try{
        const dataSave = await data.save();
        res.status(200).json(dataSave);
        // res.send(__dirname + '../views/register_book.html');
    }catch(err){
        res.status(400).send(err);
    }
    
});

router.get('/books', async(req, res) => {
    try{
        const data = await Model.find();
        res.json(data);
    }catch(err){
        res.status(500).send('ERROR');
    }
});

router.get('/books/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const data = await Model.findById(id);
        res.json(data);
    }catch(err){
        res.status(500).send('ID NOT FOUND');
    }
});

router.patch('/books/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const option = { new : true }
        const result = await Model.findByIdAndUpdate(
            id, data, option
        );
        res.send(result);
    }catch(err){
        res.status(500).send('GAGAL UPDATE DATA');
    }
});

router.delete('/books/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Books ${data.title}, id : ${id} success deleted`);
    }catch(err){
        res.status(500).send('GAGAL DELETE DATA')
    }
})



module.exports = router