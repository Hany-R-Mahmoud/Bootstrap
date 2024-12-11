// Navbar

const navbarToggleBtn = <HTMLButtonElement>(
  document.querySelector(".navbar-toggler")
);
navbarToggleBtn.addEventListener("click", function () {
  if (!this.classList.contains("collapsed")) {
    (document.querySelector(".fa-bars") as HTMLElement).style.display = "none";
    (document.querySelector(".fa-xmark") as HTMLElement).style.display =
      "block";
  } else {
    (document.querySelector(".fa-bars") as HTMLElement).style.display = "block";
    (document.querySelector(".fa-xmark") as HTMLElement).style.display = "none";
  }
});

// images url and local path
const images = <NodeListOf<HTMLImageElement>>document.querySelectorAll("img");
images.forEach((image: any) => {
  const fallbackPath = image.getAttribute("data-local-path");

  image.addEventListener("error", () => {
    if (fallbackPath) {
      image.src = fallbackPath;
    }
  });
});

/* Start Stats */
const statsSection = <HTMLDivElement>document.querySelector(".stats");
const statsNums = <NodeListOf<HTMLSpanElement>>(
  document.querySelectorAll(".stats-num")
);
let statInitiation = false;

function startCount() {
  statsNums.forEach((num: any) => {
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

/* End Stats */

/* Up-Button */
const upBtn = <HTMLElement>document.querySelector(".up-button");
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
/* Up-Button */
