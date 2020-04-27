function fetchTweets(id) {
    fetch(HANDLES_URL + `/${id}/tweets`)
        .then(resp => resp.json())
        .then(tweets => {
            tweets.forEach(tweet => {
                const handleUl = document.querySelector(`[data-handle-ul='${id}']`);
                renderTweet(tweet, handleUl)
            })
        })
}

function renderTweet(tweet, handleUl) {
    const html = `
        <div data-tweet-id=${tweet.id} class="tweet">
            <img class="image" src=${tweet.user.profile_banner_url}>
            <img class="profile_image" src=${tweet.user.profile_image_url}>
          <p>${tweet.full_text} (${tweet.user.name}), ${tweet.user.description} </p>
          <button class="delete" data-tweet-id=${tweet.id}>
            Delete
          </button></br>
          <form id=${tweet.id}>
            <input name="t_text" type="hidden" value="${tweet.full_text}"></input>
            <input name="t_user_name" type="hidden" value="${tweet.user.name}"></input>
            <input name="t_user_screen_name" type="hidden" value="${tweet.user.screen_name}"></input>
            <input name="t_profile_image_url" type="hidden" value="${tweet.user.profile_image_url}"></input>
            <input name="t_profile_banner_url" type="hidden" value="${tweet.user.profile_banner_url}"></input>
            <textarea name="content" rows="4" cols="50"></textarea></br>
            <input type="submit"  value="Save a Comment"></input>
          </form>
        </div>`;
    handleUl.insertAdjacentHTML('beforeend', html);
    let addComment = document.getElementById(tweet.id)

    addComment.addEventListener('submit', event => {
            event.preventDefault()
            postComment(event.target)
    })
};

function postComment(comment_data) {
   let userNum = document.getElementById("welcome").dataset.userId
   let tweetNum = comment_data.id
   debugger;
    fetch(`http://localhost:3000/users/${userNum}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json"
            },
            body: JSON.stringify({
                "content" : comment_data.content.value,
                "t_text" : comment_data.t_text.value,
                "t_user_name" : comment_data.t_user_name.value,
                "t_user_screen_name" : comment_data.t_user_screen_name.value,
                "t_user_profile_image_url" : comment_data.t_profile_image_url.value,
                "t_user_profile_banner_url" : comment_data.t_profile_banner_url.value
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