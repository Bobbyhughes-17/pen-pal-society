import { getLetters, getPenpals, getTopics } from "./dataAccess.js"
import { topicOptions, getTopicName } from "./topics.js"


export const letterList = () => {
    const letters = getLetters()
    const penpals = getPenpals()
   const topics = getTopics()
   
   const topicOptionsHTML = topicOptions(topics)
        let letterList = letters.map(letter => {

            const rec = penpals.find((penpal) => {
                return parseInt(letter.recipientId) === penpal.id
            })

            const auth = penpals.find((penpal) => {
                return parseInt(letter.authorId) === penpal.id
            })


            const topicOptions = topics.find((topic) => {
                return parseInt(letter.topicId) === topic.name
            })

            const topicName = getTopicName(letter.topicId);
            const authEmail = auth.email;

           
            return `
            <div id="letter">
                Dear ${rec.name},
                <br>
                ${letter.message}
                <br>
                Sincerely,
                <div class="authorName">
                    ${auth.name} 
                   
                    (${authEmail})
                   </div>
                    <div id="topicName">
                    ${topicName}
                      </div>
                    </div>
                    `
                    
        })

        let html = letterList.join("")

        return html
}











