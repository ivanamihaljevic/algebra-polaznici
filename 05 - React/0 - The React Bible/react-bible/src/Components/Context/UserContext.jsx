import React from 'react';
const UserContext = React.createContext(); // We need to createContext first in order to use it! 

/*
* As your application grows, the ability to share state amongst them will become an issue. 
* Using context, we can share state amongst all our components without using props. 
* Context provides a way to pass data through the component tree without having to 
* pass props down manually at every level.
*/

// PROVIDER: Allows us to "declare the data that we want available troughout our component tree".
// CONSUMER: Allows "any component in the component tree that needs that data to be able to subscribe to it".

// Please watch this video if you need help with context: https://www.youtube.com/watch?v=rFnfvhtrNbQ

export default function AuthUser() {

    return (
        <UserContext.Provider value={{
            user: "Nino Škuflić",
            lastAccess: "03/03/2022 11:59:58 CEST",
            didLogOut: true
        }}>
            <User />
            <LoggedOutUser />
            <LoggedInUser />
        </UserContext.Provider>
    )
}

function User() {
    return (
        <UserContext.Consumer>
            {value =>
                <p>The user is: {value.user}<br />
                    Last user access: {value.lastAccess}<br />
                    User did log out: {value.didLogOut ? "User did log out" : "User did not log out"}
                </p>}
        </UserContext.Consumer>
    )
}

function LoggedOutUser() {
    return (
        <UserContext.Consumer>
            {value =>
                <p>The logged out user is: {value.user}<br />
                    Last user access: {value.lastAccess}<br />
                    User did log out: {value.didLogOut ? "User did log out" : "User did not log out"}
                </p>}
        </UserContext.Consumer>
    )
}

function LoggedInUser() {
    return (
        <UserContext.Consumer>
            {value =>
                <p>The logged in user is: {value.user}<br />
                    Last user access: {value.lastAccess}<br />
                    User did log out: {value.didLogOut ? "User did log out" : "User did not log out"}
                </p>}
        </UserContext.Consumer>
    )
}