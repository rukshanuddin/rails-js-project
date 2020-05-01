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
            
          <p><img class="profile_image" src=${tweet.user.profile_image_url}>${tweet.full_text} (${tweet.user.name}), ${tweet.user.description} </p>
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