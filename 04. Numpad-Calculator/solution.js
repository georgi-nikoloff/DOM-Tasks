function solve() {
    const resultOutput = document.getElementById("resultOutput")
    const clearBtn = document.getElementsByClassName("clear")[0]
    const expressionOuput = document.getElementById("expressionOutput")
    Array.from(document.getElementsByClassName("keys"))
        .map(x => x.addEventListener("click", (e) => {
            const operand = e.target.value
            if (operand != '=') {
                if (operand.charCodeAt() >= 48 && operand.charCodeAt() <= 57 ||
                    operand.charCodeAt() === 46) {
                    expressionOuput.textContent += `${operand}`
                } else {
                    expressionOuput.textContent += ` ${operand} `
                }
            }
            if (operand === '=') {
                const equation = expressionOuput.textContent.split(" ")
                const firstNum = Number(equation[0])
                const operation = equation[1]
                const secondNum = Number(equation[2])
                const table = {
                    '+': firstNum + secondNum,
                    '-': firstNum - secondNum,
                    '/': firstNum / secondNum,
                    '*': firstNum * secondNum
                }
                if (firstNum != '' && secondNum != '') {
                    resultOutput.textContent = table[operation]
                } else {
                    resultOutput.textContent = 'NaN'
                }
            }
        }))
    clearBtn.addEventListener("click", () => {
        resultOutput.textContent = undefined
        expressionOuput.textContent = ""
    })
}