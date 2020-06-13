import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends Component {
    render() {
        const people = this.props.contacts;
        return (<ol>
            {people.map((v, index) => <li key={index}>{v.name}</li>)}
        </ol>);
    }
}

class Header extends Component {
    render() {
        return <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Welcome to my React Course Testing facility!
            </p>
        </header>
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <ContactList contacts={[
                    {name: "ahmed"},
                    {name: "ibrahim"},
                    {name: "hossam"}
                ]}/>
                <ContactList contacts={[
                    {name: "nooo"},
                    {name: "ibrahim"},
                    {name: "hossam"}
                ]}/>
            </div>
        );
    }
}

export default App;
