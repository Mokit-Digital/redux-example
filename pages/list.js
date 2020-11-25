import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Car from '../components/Car';

export default function List({cars}) {
    cars = JSON.parse(cars)
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

export async function getStaticProps(){
    const cars = [
        {
            name: 'Ferrari',
            url:
                'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Mercedes',
            url:
                'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Audi',
            url:
                'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ];

    return{
        props: {
            cars: JSON.stringify(cars)
        }
    }
}