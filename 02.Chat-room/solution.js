function solve() {

   const allMessages = document.getElementById("chat_messages")
   const sendButton = document.getElementById("send")
   let newMessage = document.getElementById("chat_input")

   sendButton.addEventListener("click", () => {
      const message = newMessage.value
      newMessage.value = ""
      const div = document.createElement("div")
      div.setAttribute('class', 'message my-message')
      div.textContent = message
      allMessages.appendChild(div)
   })
}