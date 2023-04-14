// DARK MODE

const sideMenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menubtn.addEventListener("click",() => {
    sideMenu.style.display = "block";
})

closebtn.addEventListener("click",() => {
    sideMenu.style.display = "none";
})

themeToggler.addEventListener("click",() => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// END OF DARK MODE

// PAGINATION

const link = document.getElementsByClassName("link");

let currentValue = 1;
function activelink() {
    for (l of link) {
        l.classList.remove('active');
    }

    event.target.classList.add('active');
    currentValue = event.target.value
}

function backBtn() {
    if (currentValue > 1) {
        for (l of link) {
            l.classList.remove('active');
        }
        currentValue--;
        link[currentValue-1].classList.add('active');
    }
}

function nextBtn() {
    if (currentValue < 6) {
        for (l of link) {
            l.classList.remove('active');
        }
        currentValue++;
        link[currentValue-1].classList.add('active');
    }
}