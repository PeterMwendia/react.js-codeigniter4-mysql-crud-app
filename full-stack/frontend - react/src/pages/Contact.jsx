import React, {Component} from "react";
import axios from "axios";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person4 from "../images/person4.jpg";

export default class Contact extends Component {

    constructor() {
        super()
        this.state = {
            fieldFirstName: "",
            fieldLastName: "",
            fieldEmail: "",
            fieldMessage: "",
            fieldPhone: ""
        }
    }

    async onClickSave(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const baseUrl = "http://localhost:8080/sendMessage";

        const datapost = {
            first_name: this.state.fieldFirstName,
            last_name: this.state.fieldLastName,
            email: this.state.fieldEmail,
            phone_number: this.state.fieldPhone,
            message: this.state.fieldMessage
        }

        console.log(datapost);

        await axios.post(baseUrl, datapost,
            {
                headers: {'Content-Type': 'application/json'}
            })

            .then(function (response) {
                alert(response.data.message)
            }).catch(function (error) {
                alert("Error 500 " + error)
            })
    }

    render() {
        return (
            <div>
                <header id="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto text-center">
                                <h1>Contact Us</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* <!-- CONTACT SECTION --> */}
                <section id="contact" className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card p-4">
                                    <div className="card-body">
                                        <h4>Get In Touch</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <h4>Address</h4>
                                        <p>550 Main st Boston MA</p>
                                        <h4>Email</h4>
                                        <p>test@test.com</p>
                                        <h4>Phone</h4>
                                        <p>(555) 555-5555</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card p-4">
                                    <div className="card-body">
                                        <h3 className="text-center">Please fill out this form to contact us</h3>
                                        <hr/>
                                        <form onSubmit={(e) => this.onClickSave(e)}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="First Name" name="first_name"
                                                               value={this.state.fieldFirstName}
                                                               onChange={(e) => this.setState({fieldFirstName: e.target.value})}
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Last Name" name="last_name"
                                                               value={this.state.fieldLastName}
                                                               onChange={(e) => this.setState({fieldLastName: e.target.value})}
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Email"
                                                               name="email" value={this.state.fieldEmail}
                                                               onChange={(e) => this.setState({fieldEmail: e.target.value})}
                                                               required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Phone Number" name="phone_number"
                                                               value={this.state.fieldPhone}
                                                               onChange={(e) => this.setState({fieldPhone: e.target.value})}
                                                               required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                <textarea className="form-control" placeholder="Message"
                                          name="message" value={this.state.fieldMessage}
                                          onChange={(e) => this.setState({fieldMessage: e.target.value})}
                                          required></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="submit" className="btn btn-outline-danger btn-block"
                                                           value="Submit"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- STAFF SECTION --> */}
                <section id="staff" className="py-5 text-center bg-dark text-white">
                    <div className="container">
                        <h1>Our Staff</h1>
                        {/* <hr> */}
                        <div className="row">
                            <div className="col-md-3">
                                <img src={person1} alt="" className="img-fluid rounded-circle mb-2"/>
                                <h4>Jane Doe</h4>
                                <small>Marketing Manager</small>
                            </div>
                            <div className="col-md-3">
                                <img src={person2} alt="" className="img-fluid rounded-circle mb-2"/>
                                <h4>Sara Williams</h4>
                                <small>Business Manager</small>
                            </div>
                            <div className="col-md-3">
                                <img src={person3} alt="" className="img-fluid rounded-circle mb-2"/>
                                <h4>John Doe</h4>
                                <small>CEO</small>
                            </div>
                            <div className="col-md-3">
                                <img src={person4} alt="" className="img-fluid rounded-circle mb-2"/>
                                <h4>Steve Smith</h4>
                                <small>Web Developer</small>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}