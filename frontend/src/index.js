const menu = document.querySelector("body > header > div > div > div.menu")
const menuBtn = document.querySelector("body > header > div > div > div:nth-child(3) > button")

fetchUsers()
fetchHandles()

menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        menuBtn.innerText = "Hide Menu";
        handlesContainer.style.top = "87%";
    } else {
        menu.style.display = 'none';
        menuBtn.innerText = "Show Menu";
        handlesContainer.style.top = "43%";
    }
})

