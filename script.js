let circle = document.querySelector(".color-option");

circle.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("circle")) {
        circle.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        document.querySelector(".prod-images .active").classList.remove("active");
        document.querySelector(`.prod-images .${target.id}`).classList.add("active");
    }
});