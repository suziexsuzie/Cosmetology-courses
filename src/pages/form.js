import React, {Component} from "react"
import Template from "../components/Template";
import {graphql, useStaticQuery} from "gatsby";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonDisabled: true,
            message: {name: "", fromEmail: "", subject: "", body: ""},
            submitting: false,
            error: null,
        }
    }

    onChange = event => {
        const name = event.target.getAttribute("name")
        this.setState({
            message: {...this.state.message, [name]: event.target.value},
        })
    }

    render() {
        return (
            <Template>
                <div>{this.state.error}</div>
                <form className="form"
                      style={{
                          display: `flex`,
                          flexDirection: `column`,
                          maxWidth: `500px`,
                      }}
                      method="post">
<select>
    <option value="archibrwi25-7-21">Architektura brwi: 25-07-2021</option>
    <option value="archibrwi1-8-21">Architektura brwi: 1-08-2021</option>
    <option value="makokol24-7-21">Makijaż okolicznościowy: 31-07-2021</option>
    <option value="makokol31-7-21">Makijaż okolicznościowy: 31-07-2021</option>
    <option value="kobido16-7-21">Masaż kobido: 16-07-2021</option>
    <option value="kobido30-7-21">Masaż kobido: 16-07-2021</option>

</select>
                    <label htmlFor="name">Imię i nazwisko:</label>
                    <input
                        type="text"
                        name="name"
                        id="nameEmail"
                        value={this.state.message.name}
                        onChange={this.onChange}
                    ></input>

                    <label htmlFor="fromEmail">Adres e-mail:</label>
                    <input
                        type="email"
                        name="fromEmail"
                        id="fromEmail"
                        value={this.state.message.fromEmail}
                        onChange={this.onChange}
                    ></input>

                    <label htmlFor="subject">Telefon</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={this.state.message.subject}
                        onChange={this.onChange}/>
<div className="terms"><input type="checkbox" id="terms" name="terms"/>
<label className="terms" for="terms">Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w powyższym formularzu w celach kontaktowych przez EvoMy oraz przez podmioty trzecie.</label></div>
                    <button className="button"
                            style={{
                                marginTop: `7px`,
                            }}
                            type="submit"
                            disabled={this.state.submitting}
                            onClick={this.onClick}>
                        Wyślij
                    </button>
                </form>
            </Template>
        )
    }
}

export default Form;
