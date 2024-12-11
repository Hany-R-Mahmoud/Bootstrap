"use strict";
// using both url and local path for images and editing image alt
const images = document.querySelectorAll("img");
images.forEach((image) => {
    const fallbackPath = image.getAttribute("data-local-path");
    const imageAlt = image.getAttribute("alt");
    image.addEventListener("error", () => {
        if (fallbackPath) {
            image.src = fallbackPath;
        }
    });
    if (imageAlt == "") {
        image.alt = fallbackPath === null || fallbackPath === void 0 ? void 0 : fallbackPath.replace(/.\/img\//gi, "").replace(/\W\w{3,4}/gi, "");
    }
});
// Our-work section
const ourWorkBtns = (document.querySelectorAll(".our-work ul li"));
const ourWorkImages = (document.querySelectorAll(".our-work .row > div > div"));
ourWorkBtns.forEach((li) => {
    li.addEventListener("click", (e) => {
        ourWorkBtns.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.currentTarget.classList.add("active", "rounded-pill", li.innerHTML);
        e.currentTarget.setAttribute("data-work", `.${li.innerHTML}`);
        ourWorkImages.forEach((box) => {
            box.parentElement.style.display = "none";
            box.classList.add("All", `${box.dataset.work}`);
        });
        document.querySelectorAll(e.currentTarget.dataset.work).forEach((grp) => {
            grp.parentElement.style.display = "block";
        });
    });
});
//# sourceMappingURL=index.js.map