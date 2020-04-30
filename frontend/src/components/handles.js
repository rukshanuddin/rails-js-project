const HANDLES_URL = `${BASE_URL}/handles`
const addBtn = document.getElementById("addBtn")
const handleForm = document.getElementById("handleForm")
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
        .then(handle => {renderHandle(handle)})
        .then(fetchHandles())
        .catch((err) => {
            console.log(err.message)
        })
}

handleForm.addEventListener('submit', event => {
    event.preventDefault()
    postHandle(event.target)
})

handlesContainer.addEventListener('click', (e) => {
    const handleUl = e.target.nextElementSibling
    if (e.target.innerText === "Fetch Tweets") {
        fetchTweets(e.target.id);
        e.target.innerText = "Show/Hide Tweets"
    } else if (e.target.innerText === "Show/Hide Tweets") {
        if (handleUl.className === "hide") {
            handleUl.className = ""
        } else {
            handleUl.className = "hide"
        }
    } else if (e.target.innerText === "Delete Handle") {
        deleteHandle(e.target.id)
    } else if (e.target.innerText === "Show Handles") {
        fetchHandles();
        e.target.innerText = "Hide Handles"
    } else if (e.target.innerText === "Hide Handles") {
        clearHandles();
        e.target.innerText = "Show Handles"
    }
});