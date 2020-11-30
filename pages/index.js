import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authLogin } from '../utils/store/fetchActions/fetchActions'

export default function Home() {

  const [ form, setForm ] = useState({
    username: "",
    password: ""
  })

  const dispatch = useDispatch()

  function onChange(e) {
    const {name, value} = e.target

    setForm({ 
      ...form, 
      [name]: value
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    dispatch(authLogin(form))

    setForm({
      username: "",
      password: ""
    })
  }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form style={{margin: "2rem"}} onSubmit={onSubmit}>
              <div className="text-center">
                <h2>Shopping Car</h2>
              </div>
              
              <Form.Group controlId="Usuario">
                <Form.Label>Usuário</Form.Label>
                <Form.Control 
                  placeholder="Usuário" 
                  name="username" 
                  onChange={onChange} 
                  value={form.username}
                />
              </Form.Group>

              <Form.Group controlId="Senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Senha" 
                  name="password" 
                  onChange={onChange} 
                  value={form.password}
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Logar
                </Button>
              </div>
              
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}
