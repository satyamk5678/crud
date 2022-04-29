const express = require('express')
const router = express.Router()
const student = require('../models/detail')


router.get('/', async(req,res) => {
    try{
           const details = await student.find()
           res.json(details)
    }catch(err){
        res.send('Error1 ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const detail = await student.findById(req.params.id)
           res.json(detail)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const detail = new student({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await detail.save() 
        res.json(a1)
    }catch(err){
        res.send('Errors')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const detail = await student.findById(req.params.id) 
        detail.sub = req.body.sub
        const a1 = await detail.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router