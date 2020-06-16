import React, {Component} from 'react';
import ChatWindow from "./ChatWindow";


const users = [{username: 'Amy'}, {username: 'John'}];

class ChatManager extends Component {
    state = {
        messages: [
            {username: 'Amy', text: 'Hi, Jon!'},
            {username: 'Amy', text: 'How are you?'},
            {username: 'John', text: 'Hi, Amy! Good, you?'},
        ]
    };
    addMessage = (message) => this.setState(prevState => ({messages: [...prevState.messages, message]}));

    render() {
        return (
            <div className="container">
                <ChatWindow user={users[0]} addNewMessage={this.addMessage} messages={this.state.messages}/>
                <ChatWindow user={users[1]} addNewMessage={this.addMessage} messages={this.state.messages}/>
            </div>
        );
    }
}

export default ChatManager;
