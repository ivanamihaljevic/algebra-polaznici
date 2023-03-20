// Solution of Task 2
import React, { useState } from 'react';
export default function Characters() {

    const [user, setUser] = useState({
        name: 'Lisa',
        bestFriend: 'Janey Powell',
        lovesSchool: true
    })

    return <Details name={user.name} bestFriend={user.bestFriend} lovesSchool={user.lovesSchool} buttonClick={() => setUser({ name: 'Bart', bestFriend: 'Milhouse Van Houten', lovesSchool: false })} />

}

function Details(props) {
    return (
        <div>
            <p>Hi, my name is {props.name}. My best friend is {props.bestFriend} and my mother is Marge Simpson. I really, really {props.lovesSchool ? 'do like school' : 'do not like school'}.</p>
            <button onClick={props.buttonClick}>Change Character</button>
        </div>
    )
}