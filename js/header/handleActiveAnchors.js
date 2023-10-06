const navAnchors = document.querySelectorAll(".header__a");
const homeAnchor = document.getElementById("anchorHome");

const addActiveAnchor = (e) => {
    if (e.target.classList.contains("header__brand")) {
        homeAnchor.classList.add("header__a--active");
    } else {
        e.target.classList.add("header__a--active");
    }
};

const removeActiveAnchor = (e) => {
    navAnchors.forEach((item) => {
        if (item.classList.contains("header__a--active")) {
            item.classList.remove("header__a--active");
        }
    });

    addActiveAnchor(e);
};

navAnchors.forEach((item) => {
    item.addEventListener("click", removeActiveAnchor);
});