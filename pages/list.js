import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Car from '../components/Car';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCars } from '../utils/store/fetchActions/fetchActions'
import { addItem } from '../utils/store/ducks/cart'

export default function List() {
    const cars = useSelector(state => state.cars)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllCars())
    },[dispatch])

    function addItemCart(car) {
        dispatch(addItem(car))
    }
	return (
		<Container>
            <Row>   
                {cars.map((car, index) => 
                    <Col xs="12" sm="3" key={index}>
                        <Car car={car} addItemCart={addItemCart}/>
                    </Col>
                )}
            </Row>
		</Container>
	);
}