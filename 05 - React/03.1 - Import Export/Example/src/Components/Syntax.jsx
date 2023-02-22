import React from 'react';

export default function Syntax() {

    const name = 'Nino Škuflić';
    const age = 25;

    const grades = {
        math: 'A-',
        english: 'A',
        science: 'C'
    }

    function sum(a, b) {
        return a + b;
    }

    return (
        <div>
            <h1>{name} is {age} years old.</h1>
            <h2>Math: {grades.math} / English: {grades.english}</h2>
            <p>Sum of 5 + 5 is {sum(5, 5)}</p>
            <p>When I divide 10 with 2, I get {10 / 2}.</p>
            <p>Today is {new Date().toString()}</p>
        </div>
    );
}