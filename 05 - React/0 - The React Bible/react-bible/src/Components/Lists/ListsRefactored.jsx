/*
* A “key” is a special string attribute you need to include when creating lists of elements.
* Let’s assign a key to our list items inside numbers.map() and fix the missing key issue.
*/

export default function ListsRefactored() {
    const numbers = [1, 2, 3, 4, 5];

    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li> // This is where we assign a KEY - When you don’t have stable IDs for rendered items, you may use the item {index} as a key as a last resort:
    );
    return (
        <ul>{listItems}</ul>
    );
}

/*
* Keys help React identify which items have changed, are added, or are removed. 
* Keys should be given to the elements inside the array to give the elements a stable identity!
* We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
*/