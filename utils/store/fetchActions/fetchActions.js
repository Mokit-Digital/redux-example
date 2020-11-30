import api from '../../../services/axios'
import { login } from '../ducks/auth'
import {addCar, addCars} from '../ducks/cars'
import { addMessage } from '../ducks/layout'
import Router from 'next/router'

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

export const authLogin = (user) =>{
    return dispatch =>{
        api
        .post('/api/login', user)
        .then(res =>{
            localStorage.setItem('token', res.data.token)
            dispatch(login())
            Router.push('/list')
        })
        .catch(error =>{
            const { message } = error.response.data
            dispatch(addMessage(message))
        })
    }
}