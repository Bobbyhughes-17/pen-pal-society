import { penPalHTML } from "./penPalHTML.js"
import { fetchLetters, fetchPenpals, fetchTopics, fetchLetterTopics } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters()
        .then(() => fetchPenpals())
        .then(() => fetchTopics())
        .then(() => fetchLetterTopics())
        .then(
            () => {
                mainContainer.innerHTML = penPalHTML()
            })
}

render()

mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})