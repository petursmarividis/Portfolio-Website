// const toggleList = document.getElementsByClassName{ 'toggle-list' };

// for (let i = 0; i < toggleList.length; i++) {
//     toggleList[i].addEventListener("click", toggle)
// }

const toggleHeader = document.getElementById{ 'nav-skill-set'}

toggleHeader.addEventListener("click", toggle)

function toggle() {
    this.classList.toggle("toggle-list")
}