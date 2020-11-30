import React, { useEffect } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeMessage } from '../../utils/store/ducks/layout'

export default function Message({message}){
    const dispatch = useDispatch()

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(removeMessage(message))
        },[2500])
    },[dispatch, message])

    return(
        <Container>
            <Alert role="alert" className="alert-success">
                
                {message}
                
            </Alert>
        </Container>
    )
}