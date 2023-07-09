const Car = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
    try {
    const { id } = req.params
      const car = await Car.getById(id)
      
    if(!car) {
      next({
      status: 404, message: `car with id ${id} is not found`
    })
    }
    else{
      req.car = car
      next()
    }
  }
  catch (err) {
    next(err)
  }
}

const checkCarPayload = async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    if(!req.body.vin) {
      return next ({
        status: 400,
        message: 'vin is missing'
    })
    }
    if(!req.body.make) {
      return next ({
        status: 400,
        message: 'make is missing'
    })
    }
    if(!req.body.modle) {
      return next ({
        status: 400,
        message: 'model is missing'
    })
    }
    if(!req.body.mileage) {
      return next ({
        status: 400,
        message: 'mileage is missing'
    })
    }
    else {
      req.new = { vin, make, model, mileage, title, transmission }
      next()
    }
  } catch (err) {
    next(err)
  }
  }

  const checkVinNumberValid = (req, res, next) => {
    // DO YOUR MAGIC
    if(vin.validate(req.body.vin)) {
      next()
    }
    else{
      next ({
      status: 400, 
      message: `vin ${req.body.vin} is invalid`
    })
    }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const exisVin = await Car.getByVin(req.body.vin)
   if(!exisVin) {
    next()
  }
  else {
  next ({
      status: 400,
    message: `vin ${req.body.vin} already exists`
  })
  }
}
catch(err) {
  next(err)
}
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}