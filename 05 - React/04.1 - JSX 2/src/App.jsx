export default function App() {

  const name = "Lisa";

  const user = {
    firstName: "Nino",
    lastName: "Škuflić",
    job: "Developer",
    age: 24,
    employed: true
  }

  const formatedUser = user => user.firstName + ' ' + user.lastName;

  let friendOrStranger;
  if (user.lastName === "Škuflić") {
    friendOrStranger = "Hello, friend.";
  } else {
    friendOrStranger = "Hello, stranger.";
  }

  return (
    <div>
      <h1>Hello, {name}. Welcome to React module.</h1>
      <p>The details of the user are as follows:
        <br />
        Name: {user.firstName} <br />
        Surname: {user.lastName} <br />
        Age: {user.age} <br />
      </p>
      <p>Hello, the formated user is: {formatedUser(user)}. :)</p>
      <h3>{friendOrStranger}</h3>
    </div>
  );
}