export const listUi = (text) => {
    const li = document.createElement("li");
    li.innerText = text;
    li.className = "border-2 border-black px-4 py-2 mb-3"
    return li;
}