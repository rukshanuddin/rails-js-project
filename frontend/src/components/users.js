const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const addUser = document.getElementById("addUser");
const userForm = document.getElementById("userForm");
const welcomeContainer = document.getElementById("welcome");

function fetchUsers() {
    fetch(USERS_URL)
        .then(resp => resp.json())
        .then(users => users.pop())
        .then(user => renderUser(user));
};

function renderUser(user) {
    const html = user ? `
    <div class="welcome" id="welcomeUser" data-user-id=${user.id}>    
    <h2 class="splash-subhead">Welcome ${user.name}!</h2>
    <p class="splash-subhead">If you aren't ${user.user_handle}, enter info above!</p>
    </div>
    <button id="startBtn"class="menu pure-button pure-button-primary">Start</button>` : `<div id="welcomeUser" class="welcome"><h1>Enter info!</h1></div><button id="start" class="menu pure-button pure-button-primary">Start</button>` 

    welcomeContainer.innerHTML = html;

    let startBtn = document.getElementById("startBtn")
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
        .then((obj_user) => {renderUser(obj_user)})
        .catch((err) => {
            alert(err.message)
        })
}


    userForm.addEventListener('submit', event => {
        event.preventDefault()
        postUser(event.target)
    })


