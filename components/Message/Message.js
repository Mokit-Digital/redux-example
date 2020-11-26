import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Message({message}){

    const isShow = useSelector(state => state.layout.showMessage)

    return(
        <React.Fragment>
            {isShow && 
                <Container>
                    <Alert role="alert" className="alert-success">
                        
                        {message}
                        
                    </Alert>
                </Container>
            }
        </React.Fragment>
    )
}