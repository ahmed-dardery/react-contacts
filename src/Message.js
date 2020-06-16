import React from 'react';

const Message = (props) => {
    const {windowOwner, message} = props;
    return (<li className={windowOwner === message.username ? 'message sender' : 'message recipient'}>
        <p>{`${message.username}: ${message.text}`}</p>
    </li>);
};

export default Message;