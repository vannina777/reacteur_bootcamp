const $ = document
const container = $.querySelectorAll(".container-fluid")
console.log(container)

window.addEventListener("resize", () => {
    if (window.innerWidth < 1200) {
        for (let i = 0; i < container.length; i++) {
            console.log("< 1200", container[i].classList)
            container[i].classList.remove("container")
        }

    } else {
        for (let i = 0; i < container.length; i++) {
            console.log("> 1200", container[i].classList)
            container[i].classList.add("container")
        }

    }
})  