export default function Conditional() {

    const loggedIn = false;

    return (
        <div>
            {loggedIn ? 'Welcome user' : 'Welcome stranger'}
        </div>
    );
}