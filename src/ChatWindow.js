import React, {Component} from 'react';
import ComposeMessageBox from "./ComposeMessageBox";
import Message from "./Message";


class ChatWindow extends Component {
    render() {
        const {user, messages, addNewMessage} = this.props;
        return (<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <ul className="message-list">
                {messages.map((message, index) => (
                    <Message key={index} windowOwner = {user.username} message = {message}/>
                ))}
            </ul>

            <ComposeMessageBox owner = {user.username} addNewMessage={addNewMessage}/>
        </div>);
    }
}


export default ChatWindow;