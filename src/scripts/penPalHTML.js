import { letterForm } from "./letterForm.js"
import { letterList } from "./letters.js"

export const penPalHTML = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="form">
    ${letterForm()}
    </section>
    <section class="letters">
        <h2>Letters</h2>
        ${letterList()}
    </section>
    `
}