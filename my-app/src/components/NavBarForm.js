import React, { Component } from 'react'
import css from './css/NavBarForm.module.css';
import NavBarChild from './NavBarChild';

export class NavBarForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        })
    }
    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        })
    }

    handleSignInLogOutToggle = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild 
                    isLoggedIn={this.state.isLoggedIn}
                    // handleSignOut={this.handleSignOut}
                    // handleSignIn={this.handleSignIn}
                    handleSignInLogOutToggle={this.handleSignInLogOutToggle}
                />
            </div>
        )
    }
}

export default NavBarForm;