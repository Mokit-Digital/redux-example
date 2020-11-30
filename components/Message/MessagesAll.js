import React from 'react'
import Message from './Message'
import { useSelector } from 'react-redux'

export default function MessagesAll() {
    const { messages } = useSelector(state=> state.layout)

    return (
        <div className="messages">
            {messages.map((mg, index)=>{
                return(
                    <Message key={index} message={mg} />
                )
            })}
        </div>
    )
}