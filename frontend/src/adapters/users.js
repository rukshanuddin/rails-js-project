class UsersAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/users"
    }

    getUsers() {
        return fetch("http://localhost:3000/users").then(response => response.json())
    }
}