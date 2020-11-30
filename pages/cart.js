import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import ItemCart from '../components/ItemCart';
import { removeItem } from '../utils/store/ducks/cart'
import { addMessage } from '../utils/store/ducks/layout'

export default function Cart() {
	const [ form, setForm ] = useState({
		amount: 1
	})

	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()

	function removeItemCart(car){
		dispatch(removeItem(car._id))

		dispatch(addMessage(`${car.name} Removido com sucesso!`))
	}

	function plusAmount(){
		setForm({
			amount: form.amount + 1
		})
	}

	function minusAmount(){
		if(form.amount > 1){
			setForm({
				amount: form.amount - 1
			})
		}
	}

	return (
		<Container>
			<Row xs="12" sm="4">
				{cart.length === 0 &&
					<Col sm={12}>
							<p className="mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
						
					</Col>
				}{cart.length !== 0 &&
					<React.Fragment>
						{cart.map((item) =>{
							return (
								<ItemCart 
									item={item}
									plusAmount={plusAmount}
									minusAmount={minusAmount}
									form={form}
									removeItemCart={removeItemCart}
								/>
							)
						})}
					</React.Fragment>
				}
			</Row>
		</Container>
	)
}