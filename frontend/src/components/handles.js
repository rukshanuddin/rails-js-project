const HANDLES_URL = `${BASE_URL}/handles`
const addBtn = document.querySelector("body > header > div > div > div.menu > div.handle-form > form > input.submit-handle.pure-button.pure-button-primary")
const handleForm = document.querySelector("body > header > div > div > div.menu > div.handle-form > form")
const handlesContainer = document.querySelector("body > div");
const handlesContent = document.getElementById("handle_content")

function fetchHandles() {
    handlesContent.innerHTML = ""
    fetch(HANDLES_URL)
        .then(resp => resp.json())
        .then(handles => {
            handles.forEach(renderHandle);
        });
}

function renderHandle(handle) {
    const html = `
    <div class="content" handle=${handle.id}>
    <h3 class="content-head">${handle.name} <button class="pure-button" id=${handle.id}>Delete Handle</button></h3>
      <button id=${handle.id}>Fetch Tweets</button>
      <ul class="" id=${handle.id} data-handle-ul=${handle.id}></ul>
    </div>`;

    handlesContent.insertAdjacentHTML('beforeend', html);
};



handlesContainer.addEventListener('click', (e) => {
    const handleUl = e.target.nextElementSibling
    if (e.target.innerText === "Fetch Tweets") {
        const handle = e.target;
        fetchTweets(handle.id);
        handle.innerText = "Show/Hide Tweets"
    } else if (e.target.innerText === "Show/Hide Tweets") {
        const handleId = e.target.dataset.handleId;
        if (handleUl.className === "hide") {
            handleUl.className = ""
        } else {
            handleUl.className = "hide"
        }
    } else if (e.target.innerText === "Delete Handle") {
        
        let handleId = e.target.id;
        debugger;
        deleteHandle(handleId)
    } else if (e.target.innerText === "Show Handles") {
        fetchHandles();
        e.target.innerText = "Hide Handles"
    } else if (e.target.innerText === "Hide Handles") {
        handlesContent.innerHTML = "";
        e.target.innerText = "Show Handles"
    } else if (e.target.innerText === "Fetch Handles") {
        fetchHandles();
        e.target.innerText = "Hide Handles"
    }
});
function clearHandles() {
    handlesContent.innerHTML = ""
}
function deleteHandle(handleId) {
    fetch(`http://localhost:3000/handles/${handleId}`, {
        method: 'delete'
    }).then(response =>
        response.json()
      .then(json => {
            return json;
        })
      .then(clearHandles())
      .then(fetchHandles())
    );
}

function postHandle(handle_data) {
    fetch('http://localhost:3000/handles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                "name": handle_data.name.value

            })
        })
        .then(res => res.json())
        .catch((err) => {
            console.log(err.message)
        })


}
addBtn.addEventListener('click', () => {

    handleForm.style.display = 'block'
    handleForm.addEventListener('submit', event => {
        event.preventDefault()
        postHandle(event.target)
    })

})