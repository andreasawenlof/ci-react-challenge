import React from 'react';
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'log in',
            message: 'Hello, Guest!',
        }
    }
    
    handleClick() {
        this.setState((prevState) => ({
                    buttonText: prevState.buttonText === 'log in' ? 'log out' : 'log in',
                    message: prevState.message === 'Hello, Guest!' ? 'Welcome back, user!' : 'Hello, Guest!',
        }), () => console.log(this.state.message))

    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText} </button>
                <span> {this.state.message}</span>
            </div>
        );
    }
}

export default NavBarSimple;