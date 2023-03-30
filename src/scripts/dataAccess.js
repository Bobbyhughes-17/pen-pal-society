const applicationState = {}
const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then((data) => {
                applicationState.topics = data
            }
        )
}


export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then((data) => {
                applicationState.letters = data
            }
        )
}


export const fetchLetterTopics = () => {
    return fetch(`${API}/letterTopics`)
        .then(response => response.json())
        .then((data) => {
                applicationState.letterTopics = data
            }
        )
}


export const fetchPenpals = () => {
    return fetch(`${API}/penpals`)
        .then(response => response.json())
        .then((data) => {
                applicationState.penpals = data
            }
        )
}


export const getLetterTopics = () => {
    return applicationState.letterTopics.map(letTopic => ({ ...letTopic}))
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({ ...letter}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({ ...topic}))
}


export const getPenpals = () => {
    return applicationState.penpals.map(pal => ({ ...pal}))
}

export const sendLetter = (letter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letter)
    }

    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


