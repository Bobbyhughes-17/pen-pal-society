import { getTopics, getPenpals } from "./dataAccess.js"

export const topicOptions = (topics) => {
    const topicsW = getTopics()
return topicsW.map(topic => {
    return `
    <label>
    <input type="checkbox" name="topics" value="${topic.id}"/>${topic.name}
    </label>`
}).join("")
}
export const getTopicName = (topicId) => {
    const topics = getTopics();
    const foundTopic = topics.find(topic => topic.id === topicId);
    return foundTopic ? foundTopic.name : "";
  }
  

// export const getTopicName = (topicId) => {
//     const foundTopic = topics.find((topic) => {
//         return parseInt(topicId) === topic.id
//     })

//    return foundTopic
// }





export const authorDropdown = () => {
    const penpals = getPenpals()

    return `
    <select id="authorDropdown">
    <option value="0">Choose author..</option>
    ${penpals.map(penpal => {
        return `<option class="authorLetter" value="${penpal.id}">${penpal.name}</option>`
    }).join("")
}

    </select>`
}

export const recDropdown = () => {
    const penpals = getPenpals()

    return `<select id="recDropdown">
    <option value="0">Choose recipient..</option>
    ${penpals.map(penpal => {
        return `<option name="recLetter" value="${penpal.id}">${penpal.name}</option>`
    }).join("")}
    </select>`
}