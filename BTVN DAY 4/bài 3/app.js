// import Lecturer from "./student.js";
// import Student from "./lecturer.js";
// import classSubject from "./class.js";

// let $hello = document.getElementById("hello");
// console.log($hello instanceof HTMLDivElement);

class formRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        let $template = document.getElementById('form-register');
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

}

window.customElements.define('form-register', formRegister);