function postComment(comment_data) {
    let userNum = document.getElementById("welcomeUser").dataset.userId
    let tweetNum = comment_data.id
    debugger;
    fetch(`http://localhost:3000/users/${userNum}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                "content": comment_data.content.value,
                "t_text": comment_data.t_text.value,
                "t_user_name": comment_data.t_user_name.value,
                "t_user_screen_name": comment_data.t_user_screen_name.value,
                "t_user_profile_image_url": comment_data.t_profile_image_url.value,
                "t_user_profile_banner_url": comment_data.t_profile_banner_url.value
            })
        })
        .then(res => res.json())
        .then((comment_object) => {
            renderComment(comment_object, tweetNum)
        })
        .catch((err) => {
            alert(err.message)
        })
}

function renderComment(object, id) {
    let thisTweet = document.getElementById(id)
    html = `
    <div class="comment">
    <h1>${object.t_user_name} tweeted:</h1>
    <p>${object.t_text}<p>
    <h2>My Take:</h2>
    <h3>${object.content}<h3>
    <p><small>${object.created_at}</small></p>
    </div>`
    thisTweet.insertAdjacentHTML('beforeend', html);
}

function renderFullComment(comment) {
    const html = `
    <div class="content" comment=${comment.id}>
    <h3 class="content-head">${comment.t_user_name} Posted:</h3>
    <img class="image" src=${comment.t_user_profile_image_url}>
    <p>${comment.t_text}<p>
    <h4>${comment.user.name} commented:</h4>
    <p><em>${comment.content}</em></p>
    <p><small><${comment.created_at}</small></p>
    </div>`;
    handlesContent.insertAdjacentHTML('beforeend', html);
}


function renderUserComments(){
    let id = document.getElementById("welcomeUser").dataset.userId
    fetch(`http://localhost:3000/users/${id}/comments`)
        .then(resp => resp.json())
        .then(comments => {
            clearHandles();
            comments.forEach(renderFullComment);
        })
}

const allComments = document.getElementById("allComments")

allComments.addEventListener('click', event => {
    event.preventDefault()
    renderUserComments()
})

