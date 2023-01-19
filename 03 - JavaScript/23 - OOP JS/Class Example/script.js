// Review https://dev.to/nehal_mahida/oops-in-javascript-with-easy-to-understand-examples-2ppn
class User {
    #password;
    constructor(name, userName, password) {
        this.name = name;
        this.userName = userName;
        this.#password = password;
    }

    login(userName, password) {
        if (userName === this.userName && password === this.#password) {
            console.log('Login Successfully');
        } else {
            console.log('Authentication Failed!!');
        }
    }

    setPassword(newPassword) {
        this.#password = newPassword;
    }
};

const nino = new User('Nino Skuflic', 'nino_skuflic', 'password:)');
const js = new User('JavaScript', 'js', 'python:)');

nino.login('nino_skuflic', 'password:)'); // Login Successfully
js.login('js', 'python:)'); // Login Successfully

console.log(nino.name); // Nehal Mahida
console.log(nino.password); // undefined
//console.log(nehal.#password); // Syntax Error

nino.setPassword('new_password:)');
nino.login('nehal_mahida', 'password:)'); // Authentication Failed!!
nino.login('nehal_mahida', 'new_password:)'); // Login Successfully