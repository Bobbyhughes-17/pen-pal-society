import { getLetters, sendLetter, getTopics } from "./dataAccess.js"
import { authorDropdown, recDropdown, topicOptions } from "./topics.js"

export const letterForm = () => {
    const topics = getTopics()

    let html = `
        <div class="field"> 
            <h2>Authors</h2>
            ${authorDropdown()}
        </div>

        <div class="field">
            <h2>Letter</h2>
        <textarea id="letterTop" name="message" rows="15" cols="70"></textarea>
        </div>

        <div class="field">
            <h2>Topics</h2>
        ${topicOptions()}
        </div>
        <div class="field">
            <h2>Recipient</h2>
            ${recDropdown()}
        </div>

        <button class="submitLetter" id="submitLetter">Send</button>
     `

     return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitLetter") {
        const userAuthor = document.querySelector(`select[id="authorDropdown"]`).value 
        const userRecipient = document.querySelector(`select[id="recDropdown"]`).value 
        const userMessage = document.querySelector(`textarea[id="letterTop"]`).value
        const userTopicId = document.querySelector("input[type=checkbox]:checked").value 


            const dataToSendToAPI = {
                authorId: userAuthor,
                recipientId: userRecipient,
                message: userMessage,
                topicId: parseInt(userTopicId),
                date: (Date.now())
            }
            sendLetter(dataToSendToAPI)

    }
})