const express = require('express');
const router = express.Router();

const Sales = require('../Model/Sales.model');


router.post('/', async (req, res, next) =>{
try {
    const sales = new Sales(req.body);
    const result = await sales.save();
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.get('/', async (req, res, next) =>{
try {
    const result = await Sales.find({},{__v: 0});
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.get('/:id', async (req, res, next) =>{
    const id = req.params.id;
try {
    const result = await Sales.findById(id);
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.delete('/:id', async (req, res, next) =>{
    const id = req.params.id;
try {
    const result = await Sales.findByIdAndDelete(id);
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});

router.patch('/:id', async (req, res, next) =>{
try {
    const id = req.params.id;
    const updates = req.body;
    const result = await Sales.findByIdAndUpdate(id, updates);
    res.send(result);
} catch (error) {
    res.send(error.message);
}
});


module.exports = router;