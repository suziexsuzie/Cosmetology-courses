import React, {Component} from "react"

class ContactForm extends Component {
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
            <>
                <div>{this.state.error}</div>
                <form
                    style={{
                        display: `flex`,
                        flexDirection: `column`,
                        maxWidth: `500px`,
                    }}
                    method="post">

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

                    <label htmlFor="subject">Tytuł:</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={this.state.message.subject}
                        onChange={this.onChange}/>

                    <label htmlFor="body">Wiadomość:</label>
                    <textarea
                        style={{
                            height: `150px`,
                        }}
                        name="body"
                        id="body"
                        value={this.state.message.body}
                        onChange={this.onChange}/>

                    <button
                        style={{
                            marginTop: `7px`,
                        }}
                        type="submit"
                        disabled={this.state.submitting}
                        onClick={this.onClick}>
                        Wyślij
                    </button>
                </form>
            </>
        )
    }
}

export default ContactForm;
