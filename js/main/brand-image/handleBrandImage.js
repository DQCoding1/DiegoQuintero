const homeBrandImgs = document.querySelectorAll(".home__brandImg")
const brandDarkDesktop = document.getElementById("brand-darkmode-desktop")
const brandlightDesktop = document.getElementById("brand-lightmode-desktop")

export default function handleBrandImages(){
    homeBrandImgs.forEach((item) =>{
        if (item.classList.contains("home__brandImg--active")){
            item.classList.remove("home__brandImg--active")
        }
    })

    if (document.body.classList.contains("light-mode")){
        brandlightDesktop.classList.add("home__brandImg--active")
    }
    if (document.body.classList.contains("dark-mode")){
        brandDarkDesktop.classList.add("home__brandImg--active")
    }

    
}