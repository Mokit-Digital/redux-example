const 

class CarsControllers {

    index(req, res){
        return res.json({message: "Cars..."})
    }
}

module.exports = new CarsControllers()