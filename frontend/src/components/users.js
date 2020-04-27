const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const addUser = document.querySelector("body > header > div > div > div.menu > div.user-form > form > input.submit-user.pure-button.pure-button-primary")
const userForm = document.querySelector("body > header > div > div > div.menu > div.user-form > form")
const welcomeContainer = document.querySelector("body > header > div > div > div:nth-child(3) > div");

function fetchUsers() {
    fetch(USERS_URL)
        .then(resp => resp.json())
        .then(users => users.pop())
        .then(user => renderUser(user));
};

function renderUser(user) {

    const html = user ? `
    <div class="welcome" id="welcome" data-user-id=${user.id}>    
    <h2 class="splash-subhead">Welcome ${user.name}!</h2>
    <p class="splash-subhead">If you aren't ${user.user_handle}, enter info above!</p>
    </div>
    <button class="menu pure-button pure-button-primary">Start</button>` : `<div class="welcome"><h1>Enter info!</h1></div><button class="menu pure-button pure-button-primary">Start</button>` 

    welcomeContainer.innerHTML = html;

    let startBtn = document.querySelector("body > header > div > div > div:nth-child(3) > div > button")
    startBtn.addEventListener('click', () => {
        if (handlesContainer.className === "main content-wrapper") {
            handlesContainer.className = "main content-wrapper hide";
            startBtn.innerText = "Start"
        } else if (handlesContainer.className === "main content-wrapper hide") {
            handlesContainer.className = "main content-wrapper"
            startBtn.innerText = "Hide"
        }
    })
}

function postUser(user_data) {
    
    fetch(USERS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                "name": user_data.name.value,
                "user_handle": user_data.handle.value
            })
        })
        .then(res => res.json())
        .then((obj_user) => {
            
            let new_user = renderUser(obj_user)
            const welcome = document.querySelector("body > header > div > div > div:nth-child(3) > div")
        })
        .catch((err) => {
            alert(err.message)
        })
}

addUser.addEventListener('click', () => {
    userForm.style.display = 'block'
    userForm.addEventListener('submit', event => {
        event.preventDefault()
        postUser(event.target)
    })
})

