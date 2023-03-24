export default function Events() {

    function handleClick() {
        alert("You have clicked the button");
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form was submitted");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit form</button>
            </form>

            <hr />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}