export default function Colors() {
    return (
        <div
            style={{ background: "yellow", padding: "50px" }}
            onMouseEnter={() => console.log("Entered yellow")}
        >
            <div
                style={{ background: "blue", padding: "50px" }}
                onMouseEnter={() => console.log("Entered blue")}
            >
                <div
                    style={{ background: "green", padding: "50px" }}
                    onMouseEnter={() => console.log("Entered green")}
                >
                </div>
            </div>
        </div>
    );
}