import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Add() {
	return (
		<Form>
			<Form.Group>
				<label>Nome</label>
				<input type="text" name="name" className="form-control" placeholder="Nome..." />
			</Form.Group>

			<Form.Group>
				<label>URL:</label>
				<input type="text" name="url" className="form-control" placeholder="URL:https://cars" />
			</Form.Group>

            <Button type="submit">
				Adicionar
			</Button>
		</Form>
	);
}