
const heading = document.getElementById("heading");
 




const hideHeading = () => {
    heading.classList.add("hidden")
}

const showHeading = () => {
    heading.classList.remove("hidden");
}
const toggleHeading = () => {
    heading.classList.toggle("-translate-x-[600px]");
}