import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'

export default function Cart() {

	const cart = useSelector(state => state.cart)

	return (
		<Container>
			<Row>
				{cart.length === 0 ? (
					<Col sm={12}>
							<p className="mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
						
					</Col>
				):(
					<React.Fragment>
						{cart.map(item =>{
							<Col xs="12" sm="3" key={item._id}>
								<Card
									bg={'dark'}
									key={1}
									text={'dark' === 'light' ? 'dark' : 'white'}
									style={{ width: '18rem', marginTop: '2rem' }}
									className="mb-2"
								>
									<Card.Header>{item.name}</Card.Header>
									<Card.Body>
									<Card.Title> Card Title </Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk
										of the card's content.
									</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						})}
					</React.Fragment>
				)}
			</Row>
		</Container>
	)
}