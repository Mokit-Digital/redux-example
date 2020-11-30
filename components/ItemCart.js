import React from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap';
import { FaPlus, FaTrash, FaMinus } from 'react-icons/fa'

export default function ItemCart({ item, minusAmount, plusAmount, form, removeItemCart }) {

    return(
        <Col key={item._id} style={{margin: "2rem"}}>
            <Card
                bg={'dark'}
                text={'dark' === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem', marginTop: '2rem' }}
                className="mb-2"
            >
                <Card.Header>{item.name}</Card.Header>
                <Card.Body style={{padding: "0"}}>
                    <Image src={item.url} style={{width: "100%"}}></Image>
                </Card.Body>
                
                <Button 
                    className="btn-danger" 
                    style={{ position: "absolute", bottom: 15, right: 15 }}
                    onClick={()=> removeItemCart(item)}    
                >
                    <FaTrash />
                </Button>
                <div style={{display: "inline"}}>
                    <Button 
                        className="btn-danger" 
                        style={{display: "inline", position: "absolute", bottom: 15, left: 5}}
                        onClick={minusAmount}
                    >
                        <FaMinus />
                    </Button>

                    <input 
                        className="form-control"
                        style={{
                                width: "3rem", 
                                height: "2.4rem", 
                                display: "inline", 
                                textAlign: "center",
                                position: "absolute", 
                                bottom: 15, 
                                left: 50}} 
                        value={form.amount}
                    />

                    <Button 
                        className="btn-danger" 
                        style={{display: "inline", position: "absolute", bottom: 15, left: 101}}
                        onClick={plusAmount}
                    >
                        <FaPlus />
                    </Button>
                </div>
            </Card>
        </Col>
    )
}