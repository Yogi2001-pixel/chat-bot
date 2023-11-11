import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { analyze } from './utils';



export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
            message : "Hi, May i know Your Name?"
        }
    ])

    const [text, setText] = useState('');
    const onSend = () => {
        let list = [...messages, { message: text, user: true}];
        if(list.length>2) {
            const reply = analyze(text) 
            list = [...list,{message: reply}];
        } else {
            list = [
                ...list,
                {
                    message: `Hi, ${text}, How Can I Help You ?`,
                }, 
 
            ] 
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
            document.querySelector("#copyRight").scrollIntoView();
        })
    }
    return (
        <div className='chatContent'>
            <div className='chatHeading'>
                <h1 className='text-center'>Chat Tym</h1>
            </div>
            <div className='chatMessage shadow'>
                {
                    messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)
                }
                <div class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Enter Your Message" aria-label="text" value={text} onChange={(e) => setText(e.target.value)}></input>
                    <button class="btn btn-primary" type="submit" onClick={onSend}>Send</button>
                </div>
                <div className='copyright mt-3' id='copyRight'>
                    <p className='text-center'>Ask Your Queries and Enjoy</p>
                </div>
            </div>
            <div className='copyrightSection d-flex justify-content-between'>
                <p><i class="fa-regular fa-copyright me-2"></i>Copyrights by YogeX 2023</p>
                <p>All Rights Reserved</p>
            </div>
        </div>
    )
}
