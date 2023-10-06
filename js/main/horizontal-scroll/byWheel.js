const main = document.querySelector(".main")

const moveHorizontalScroll = (e) => {
    main.scrollLeft += e.deltaY      
}

main.addEventListener("wheel", moveHorizontalScroll)