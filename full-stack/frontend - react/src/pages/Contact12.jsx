import React, {useState} from 'react';
import axios from 'axios';
import person1 from "../images/person1.jpg"
import person2 from "../images/person2.jpg"
import person3 from "../images/person3.jpg"
import person4 from "../images/person4.jpg"

const Contact = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const baseUrl = 'http://localhost:8080/sendMessage';
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(baseUrl, formData)
            .then(response => {
                // Handle success
                console.log(response.data);
                alert(response.data.message); // Displays an alert with the message from the server
            })
            .catch(error => {
                // Handle error
                console.error(error);
                if (error.response && error.response.data) {
                    alert(error.response.data.message); // Displays an alert with the error message from the server
                } else {
                    alert("An error occurred");
                }
            });
    };


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
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First Name"
                                                           name="first_name" value={formData.first_name}
                                                           onChange={handleChange} required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last Name"
                                                           name="last_name" value={formData.last_name}
                                                           onChange={handleChange} required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Email"
                                                           name="email" value={formData.email} onChange={handleChange}
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Phone Number" name="phone_number"
                                                           value={formData.phone_number} onChange={handleChange}
                                                           required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Message"
                                                              name="message" value={formData.message}
                                                              onChange={handleChange} required></textarea>
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
};

export default Contact;
