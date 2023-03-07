/*
* One of the most useful in React is the .map() array method.
* The .map() method allows you to run a function on each item in the array, returning a new array as the result.
* In React, map() can be used to generate lists.
*/

export default function Lists() {
    const numbers = [1, 2, 4, 6, 8];

    // DEMO ONLY: const fruits = ['apple', 'banana', 'orange'];
    // DEMO ONLY: const list = fruits.map((x) => <p>{x}</p>)

    /*
    * Below, we loop through the numbers array using the JavaScript map() function. 
    * We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems.
    */

    const listItems = numbers.map((number) =>
        <li key={number}>
            {number}
        </li>
    );
    return (
        <div>
            {/* DEMO ONLY: {list} */}

            {/* We include the entire listItems array inside a <ul> element, and render it to the DOM: */}
            <ul>{listItems}</ul>
        </div>
    );
}