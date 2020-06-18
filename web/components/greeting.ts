import {html, LitElement, property} from "lit-element";

export class Greeting extends LitElement {

    @property( { type : String }  )
    title = '';

    render(){
        return html`
            <p>${this.title}</p>
        `;
    }
}