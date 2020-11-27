import api from '../../../services/axios'
import {addCar, addCars} from '../ducks/cars'

export const getAllCars = () =>{
    return dispatch => {
        api
        .get('/api/apiCar')
        .then(res=> {
            dispatch(addCars(res.data))
        })
        .catch(console.log)
    }
}

export const addCarFetch = (car) =>{
    return dispatch =>{
        api
        .post('/api/apiCar', car)
        .then(res => {
            dispatch(addCar(res.data))
        })
        .catch
    }
}