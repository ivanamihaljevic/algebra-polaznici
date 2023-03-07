// Solution of Task 2
import React, { useState } from 'react'; //Obavezan import useState da bi koristili stanje u funkcionalnoj komponenti
export default function Characters() {

    const [user, setUser] = useState({
        name: 'Lisa',
        bestFriend: 'Janey Powell',
        lovesSchool: true
    })

    return (
        <div>
            <h1>Ovdje ide komponenta</h1>
            <Details name={user.name} bestFriend={user.bestFriend} lovesSchool={user.lovesSchool}
                gumb={() => setUser({ name: 'Bart', bestFriend: 'Milhouse Van Houten', lovesSchool: false })} />
        </div>
    )

}

// Da bi mogli primati propse, moramo u zagradu staviti ključnu riječ "props"
function Details(props) {
    return (
        <div>
            <p>Hi, my name is {props.name}. My best friend is {props.bestFriend} and my mother is Marge Simpson. I really, really {props.lovesSchool ? 'do like school' : 'do not like school'}.</p>
            <button onClick={props.gumb}>Change Character</button>
        </div>
    )
}