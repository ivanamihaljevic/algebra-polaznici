/*
* Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
* Keys need to be unique to each sibling. But they can be duplicated globally.
*/

function Car(props) {
    return <li>I am a {props.brand}</li>;
}

export default function Garage() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Audi' }
    ];
    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </div>
    );
}