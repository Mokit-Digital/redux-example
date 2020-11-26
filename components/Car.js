  
import React from 'react';
import { Button, Card, Col, Container, Image } from 'react-bootstrap';
import { AiFillCreditCard } from 'react-icons/ai'

export default function Car({ car }) {
	return (
		<Col>
			<Card>
				<Image src={car.url} className="card-img-top" alt={car.name} style={{height: "20rem"}}/>
				<Card.Body className="card-body">
					<Card.Title>{car.name}</Card.Title>
					<Button>
						<AiFillCreditCard />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}