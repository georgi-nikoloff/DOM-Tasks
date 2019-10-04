function solve() {
    const binOrHex = {
        'binary': 2,
        'hexadecimal': 16
    }
    const insertOptions = document.getElementById("selectMenuTo")
    const binary = document.createElement("option")
    const hex = document.createElement("option")
    const convertButton = document.getElementsByTagName('button')[0]
    let result = document.getElementById("result")
    binary.setAttribute("value", "binary")
    hex.setAttribute("value", "hexadecimal")
    binary.innerText = 'Binary'
    hex.innerText = 'Hexadecimal'
    insertOptions.appendChild(binary)
    insertOptions.appendChild(hex)
    convertButton.addEventListener('click', () => {
        let valueOf = binOrHex[insertOptions.value]
        let numb = document.getElementById("input").value
        if (valueOf === 2) {
            result.value = parseInt(numb).toString(2)
        } else {
            result.value = parseInt(numb).toString(16).toUpperCase()
        }
    })
}