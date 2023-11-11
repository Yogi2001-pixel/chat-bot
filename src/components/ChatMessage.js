import React from 'react'

export default function ChatMessage(props) {
  return (
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
       {
        props.user ? (
            <span className='message-right'>
                <span>{props.message}</span>  
                <i class="fa-solid fa-user ms-2"></i>  
            </span>
        ) : (
            <span className='message-left'>
                <i class="fa-brands fa-rocketchat me-2"></i> 
                <span>{props.message}</span>  
            </span>
        )} 
    </div>
  )
}
