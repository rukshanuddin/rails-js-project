class TweetsAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/users/1/tweets"
    }

    getRecipes() {
        return fetch(this.baseURL).then(response => response.json()).then(json => json.data)
    }

    postRecipeToApi(configurationObject) {
        return fetch(this.baseURL, configurationObject)
            .then(response => response.json())
            .catch(error => console.log("Error: " + error))
    }

    getTweetByHandle(handle) {
        return fetch(this.baseURL + `/${handle.id}`).then(response => response.json())
    }
}
