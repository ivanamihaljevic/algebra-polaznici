import React from 'react';
const UserContext = React.createContext(); // Moramo napraviti context kako bi ga mogli koristiti

export default function AuthUser() {
    return (
        <UserContext.Provider value={{
            user: 'Nino Skuflic',
            lastAccess: '11/03/2023 11:47:14 CET',
            didLogOut: false
        }}>
            <User />
            <LoggedInUser />
            <LoggedOutUser />
        </UserContext.Provider>
    )
}

function User() {
    return (
        <UserContext.Consumer>
            {value =>
                <p>The user is: {value.user}<br />
                    Last access: {value.lastAccess}<br />
                    User did log out: {value.didLogOut ? 'User did log out' : 'User did NOT log out'}
                </p>
            }
        </UserContext.Consumer>
    )
}

function LoggedOutUser() {
    return (
        <UserContext.Consumer>
            {value =>
                <p>The logged out user is: {value.user}<br />
                    Last access: {value.lastAccess}<br />
                    User did log out: {value.didLogOut ? 'User did log out' : 'User did NOT log out'}
                </p>
            }
        </UserContext.Consumer>
    )
}

function LoggedInUser() {
    return (
        <UserContext.Consumer>
            {value =>
                <p>The logged in user is: {value.user}<br />
                    Last access: {value.lastAccess}<br />
                    User did log out: {value.didLogOut ? 'User did log out' : 'User did NOT log out'}
                </p>
            }
        </UserContext.Consumer>
    )
}