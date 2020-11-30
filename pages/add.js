import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { addMessage } from '../utils/store/ducks/layout'
import { useDispatch, useSelector } from 'react-redux'
import { addCarFetch } from '../utils/store/fetchActions/fetchActions'
import Router from 'next/router'

export default function Add() {

	const { isAuthenticate } = useSelector((state)=>state.auth)

	//Redireciona se não for autenticado
	useEffect(()=>{
		if(!isAuthenticate){
			Router.push('/')
		}	
	})
	

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

		dispatch(addMessage(`${form.name} cadastrado com sucesso`))
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