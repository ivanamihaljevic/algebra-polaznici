export default function Form() {
    function handleSubmit(e) {
        // Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly.
        e.preventDefault(); // Prevents default behaviour 
        alert('You clicked submit.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );

}