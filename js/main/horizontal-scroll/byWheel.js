const main = document.querySelector(".main");
const homeScroll = document.querySelector(".home__scroll");

const moveHorizontalScroll = (e) => {
    if (e.deltaY > 0 && !homeScroll.classList.contains("element--hidden")) {
        homeScroll.classList.add("element--hidden");
    }

    const projectDetailActive = document.querySelector(
        ".projectDetail--active"
    );

    if (!projectDetailActive) {
        main.scrollLeft += e.deltaY;
    }
};

main.addEventListener("wheel", moveHorizontalScroll);
