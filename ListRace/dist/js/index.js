"use strict";
const navbarToggleBtn = (document.querySelector(".navbar-toggler"));
navbarToggleBtn.addEventListener("click", function () {
    if (!this.classList.contains("collapsed")) {
        document.querySelector(".fa-bars").style.display = "none";
        document.querySelector(".fa-xmark").style.display =
            "block";
    }
    else {
        document.querySelector(".fa-bars").style.display = "block";
        document.querySelector(".fa-xmark").style.display = "none";
    }
});
const images = document.querySelectorAll("img");
images.forEach((image) => {
    const fallbackPath = image.getAttribute("data-local-path");
    image.addEventListener("error", () => {
        if (fallbackPath) {
            image.src = fallbackPath;
        }
    });
});
const statsSection = document.querySelector(".stats");
const statsNums = (document.querySelectorAll(".stats-num"));
let statInitiation = false;
function startCount() {
    statsNums.forEach((num) => {
        let target = num.dataset.target;
        let start = setInterval(() => {
            num.innerHTML++;
            if (num.innerHTML === target) {
                clearInterval(start);
            }
        }, 100);
    });
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= statsSection.offsetTop - 500) {
        if (!statInitiation) {
            startCount();
        }
        statInitiation = true;
    }
});
const upBtn = document.querySelector(".up-button");
window.onscroll = function () {
    this.scrollY > 1000
        ? (upBtn.style.bottom = "2rem")
        : (upBtn.style.bottom = "-2rem");
};
upBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
//# sourceMappingURL=index.js.map