import React, {Component} from 'react';


class ComposeMessageBox extends Component {
    /*
        If the user did not type anything, he/she should not be
        allowed to submit.
    */
    state = {
        text: ''
    };

    isDisabled = () => this.state.text.trim().length === 0;
    changeText = (event) => this.setState({text: event.target.value});

    onClick = (event, username, callback) => {
        event.preventDefault();
        callback({text: this.state.text, username});
        this.setState({text: ''});
    };

    render() {
        const {addNewMessage, owner} = this.props;

        return (<div>
            <form className="input-group">
                <input onChange={this.changeText} type="text" value={this.state.text}
                       className="form-control"
                       placeholder="Enter your message..."/>
                <div className="input-group-append">
                    <button onClick={(event) => this.onClick(event, owner, addNewMessage)} className="btn submit-button"
                            disabled={this.isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>
        </div>);
    }
}


export default ComposeMessageBox;