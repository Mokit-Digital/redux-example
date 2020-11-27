import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { addCar } from '../utils/store/ducks/cars'
import { hideMessage, showMessage } from '../utils/store/ducks/layout'
import { useDispatch } from 'react-redux'
import { addCarFetch } from '../utils/store/fetchActions/fetchActions'

export default function Add() {

	const [form, setForm] = useState({ name: "", url: "" })
	const dispatch = useDispatch()

	function formChange(e) {
		setForm({
			...form, 
			[e.target.name]: e.target.value
		})
	}

	function onSubmit(e) {
		e.preventDefault()

		dispatch((addCarFetch(form)))

		setForm({
			name: "",
			url: ""
		})

		dispatch(showMessage())

		setTimeout(() => {
			dispatch(hideMessage())
		}, 2500)
	}

	return (
		<Container>
			<Row>
				<Col></Col>
				<Col>
				<Form onSubmit={onSubmit}>
					<Form.Group>
						<label>Nome</label>
						<input 
							onChange={formChange} 
							type="text" 
							name="name" 
							className="form-control" 
							placeholder="Nome..." 
							value={form.name} />
					</Form.Group>

					<Form.Group>
						<label>URL:</label>
						<input 
							onChange={formChange} 
							type="text" name="url" 
							className="form-control" 
							placeholder="URL:https://cars" 
							value={form.url}/>
					</Form.Group>

					<Button type="submit">
						Adicionar
					</Button>
				</Form>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}