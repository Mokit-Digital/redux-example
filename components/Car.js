  
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { AiFillCreditCard } from 'react-icons/ai'

export default function Car({ key, car, addItemCart }) {
	return (
			<Card key={key} style={{margin: '0.5rem'}}>
				<Image src={car.url} className="card-img-top" alt={car.name} style={{height: "10rem"}}/>
				<Card.Body className="card-body">
					<Card.Title>{car.name}</Card.Title>
					<Button onClick={()=> addItemCart(car)}>
						<AiFillCreditCard />
					</Button>
				</Card.Body>
			</Card>
	);
}