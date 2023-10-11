const main = document.querySelector(".main");

const moveHorizontalScroll = (e) => {
    const projectDetail = document.querySelector(".projectDetail--active");
    if (!projectDetail) {
        main.scrollLeft += e.deltaY;
    }
};

main.addEventListener("wheel", moveHorizontalScroll);
