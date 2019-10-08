function solve() {
    const addBtn = document.querySelector('button[type="button"]')
    const inputField = document.querySelector('input[type="text"]')
    const olElements = document.getElementsByTagName("ol")[0];
    const listElements = olElements.getElementsByTagName("li");
    addBtn.addEventListener("click", () => {
        const name = inputField.value.toUpperCase()
        const firstLetter = name.split('')[0]
        const lowerCaseName = name.slice(1, name.length).toLowerCase()
        const result = firstLetter + lowerCaseName
        let i = name.charCodeAt() - 65;
        if (listElements[i].textContent.length > 0) {
            listElements[i].textContent += ', ' + result
        } else {
            listElements[i].textContent = result
        }
    })
}