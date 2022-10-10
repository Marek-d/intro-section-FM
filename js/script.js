const dropdowns = document.querySelectorAll(".dropdown")

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select")
    const caretIcon = dropdown.querySelector(".caret-icon")
    const menu = dropdown.querySelector(".menu")
    const options = dropdown.querySelectorAll(".menu li")
    const selected = dropdown.querySelector(".selected")

    select.addEventListener("click", () => {
        caretIcon.classList.toggle("caret-icon-rotate")
        menu.classList.toggle("menu-open")
    })

    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.textContent = option.textContent
            caretIcon.classList.toggle("caret-icon-rotate")
            menu.classList.toggle("menu-open")
        })
    })

    dropdown.addEventListener("blur", () => {
        menu.classList.remove("menu-open")
        caretIcon.classList.remove("caret-icon-rotate")
    })
})

// mobile version

const hamMenu = document.querySelector(".ham-menu")

const iconMenu = hamMenu.querySelector(".icon-menu")
const iconMenuClose = hamMenu.querySelector(".icon-close-menu")
const navigation = document.querySelector("nav")
const register = document.querySelector(".register")

hamMenu.addEventListener("click", () => {
    navigation.classList.toggle("mobile-nav")
    register.classList.toggle("hide")  
    iconMenu.classList.toggle("hide")
    iconMenuClose.classList.toggle("hide")  
})
