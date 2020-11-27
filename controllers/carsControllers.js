import Car from '../models/carschema'

class CarsControllers {

    constructor(dao){
        this.dao = dao
    }

    index = async(req, res)=>{
        const cars = await Car.find()
        
        return res.json(cars)
    }

    create = async(req, res)=>{
        const car = await this.dao.create(req.body)
        return res.status(201).json(car)
    }
}

module.exports = new CarsControllers(Car)