// const body = document.querySelector(".body");
const btn = document.querySelector(".btn");
const txt= document.querySelector(".para");
const body = document.body;

window.onload = () =>{
    const SavedTheme = localStorage.getItem("theme");
    if (SavedTheme === 'dark') {
        body.classList.add("darkTheme");
    } else {
        body.classList.remove("darkTheme");
    }
}

btn.addEventListener("click", updateTheme);

function updateTheme() {
    body.classList.toggle("darkTheme");
    const isDark = body.classList.contains("darkTheme");
    if (isDark) {
        txt.textContent = "This is dark mode";
        btn.textContent = "switch to light mode";
        localStorage.setItem("theme", "dark");
    } else {
        txt.textContent = "This is light mode";
        btn.textContent = "switch to dark mode";
        localStorage.setItem("theme", "light");
    }
}