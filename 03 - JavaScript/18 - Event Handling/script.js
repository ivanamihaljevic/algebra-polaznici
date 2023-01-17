function displayTime() {
    document.getElementById('time').innerHTML = Date();
}

function getName() {
    let name = document.getElementById('name').value;
    document.getElementById('firstName').innerHTML = "Your name is: " + name;
}