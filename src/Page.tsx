import './components/styles/App.css';
import Header from './components/Header.tsx';
import Slider from './components/Slider.tsx';
import Started from './components/Started.tsx';
import { respond , say } from './components/func/bot_response.tsx';
import { useEffect, useState } from 'react';

function Page () {
    let message_log:JSX.Element[] = [];
    const [use_log, set_log] = useState([respond("Hello, welcome to Solargain! How can I help you today?")]);

    function open_bot () {
        document.querySelector('#chat-bot-button')?.classList.add('chat-hidden');
        document.querySelector('#chat-bot-data')?.classList.remove('chat-hidden');
    };
    
    function close_bot () {
        document.querySelector('#chat-bot-button')?.classList.remove('chat-hidden');
        document.querySelector('#chat-bot-data')?.classList.add('chat-hidden');
    };

    function full_close_bot () {
        set_log([respond("Hello, welcome to Solargain! How can I help you today?")]);
        close_bot();
    }

    async function send_to_bot () {
        const prompt:any = document.querySelector('#chat-type')?.value;
        console.log(prompt);

        document.querySelector('#chat-send').disabled = true;
        document.querySelector('#chat-thinking')?.classList.add('thinking-active');

        const request = await fetch("http://58.164.13.181:3000", {method:"POST", mode:"cors", body:prompt});
        const res = await request.text();

        set_log([...use_log, say(prompt), respond(res)]);

        document.querySelector('#chat-send').disabled = false;
        document.querySelector('#chat-thinking')?.classList.remove('thinking-active');
    };

    document.addEventListener("keypress", (event) => {
        console.log(event.key)
    });
    
    return (
        <>
            <Header />
            <Slider />
            <Started />

            <button onClick={open_bot} id='chat-bot-button'>
                <img src="/chat.png" id='chat-hardcode-png' />
            </button>
            <div id='chat-bot-data' className='chat-hidden'>
                <div id='chat-header'>
                    <div className='chat-func'>
                        <i className="fas fa-comments"></i>
                    </div>
                    <p>Chat to a real person!</p>
                    <div className='chat-func'>
                        <button onClick={close_bot} id='chat-minimise' className='chat-operations'><i className="far fa-window-minimize"></i></button>
                        <button onClick={full_close_bot} id='chat-close' className='chat-operations'><i className="fas fa-times"></i></button>
                    </div>
                </div>

                <div id='chat-body'>
                    {use_log}
                    <div id='chat-thinking'>
                        <div className='bot-response'>
                            <div className='bot-id'>
                                <img src="/serve.png" />
                                <small>Marshall</small>
                            </div>
                            <div className='bot-body'>
                                <div className='bot-msg'>
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='chat-user'>
                    <div id='chat-input'>
                        <input autoComplete='false' autoCorrect='false' id='chat-type' type="text" />
                        <button onClick={send_to_bot} id='chat-send'></button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Page;