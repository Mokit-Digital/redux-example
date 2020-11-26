import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../components/Car';
import { useSelector } from 'react-redux'

export default function List() {
    const cars = useSelector(state => state.cars)
	return (
		<Container fluid>
			<Row>
                
                {cars.map((car, index) => 
                    <Car key={index} car={car} />
                )}
            </Row>
		</Container>
	);
}