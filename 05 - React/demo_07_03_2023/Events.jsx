// Solution of Task 3
import React, { useState } from 'react';
export default function Events() {

    const [character, setCharacter] = useState('')

    function onChangeValue(e) {
        setCharacter(e.target.value)
    }

    function handleSubmit() {
        alert('You have selected ' + character)
    }

    return (
        <>
            <div onChange={onChangeValue}>
                <h1>Who do you like more?</h1>
                <input type='radio' id='Lisa' name='character' value='Lisa' />
                <label htmlFor='Lisa'>Lisa</label>
                <input type='radio' id='Bart' name='character' value='Bart' />
                <label htmlFor='Bart'>Bart</label>
                <br />
            </div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </>
    )

}