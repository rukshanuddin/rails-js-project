const menu = document.getElementById("menu")
const menuBtn = document.getElementById("menuBtn")

fetchUsers()
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

