import React from 'react'

function NavBarChild(props) {
  return (
        <div>
            {
                props.isLoggedIn === false ? (
                <div>
                    <form>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" />
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" />
                        <button onClick={props.handleSignInLogOutToggle}>Log In</button>
                    </form>
                </div>
                )
                :
                (
                <div>
                    <button onClick={props.handleSignInLogOutToggle}>Log Out</button>
                </div>
                )
            }
        </div>
  )
}

export default NavBarChild