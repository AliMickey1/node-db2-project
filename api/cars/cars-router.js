// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require('./cars-middleware')

router.get('/', checkCarId, async (req, res, next) => {
    
    try {
        const car = await Car.getAll()
        res.json(car)
    }
    catch(err) {
        next(err)
    }
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
        const car = await Car.create(req.body)
        res.json(car)
    }
    catch(err) {
        next(err)
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = router