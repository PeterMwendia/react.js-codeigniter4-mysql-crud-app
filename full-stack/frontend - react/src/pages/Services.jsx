import React, {useState, useEffect} from "react";
import axios from "axios";

const Services = () => {
    const [services, setServices] = useState([]);
    const [updateServiceId, setUpdateServiceId] = useState(null);
    const [updatedService, setUpdatedService] = useState({
        service: "",
        cost: "",
        valid: false,
    });

    const [newService, setNewService] = useState({
        service: "",
        cost: "",
        valid: ""
    });

    const handleNewServiceChange = (e) => {
        setNewService({
            ...newService,
            [e.target.name]: e.target.value
        });
    };


    const fetchServices = async () => {
        try {
            const response = await axios.get("http://localhost:8080/getServices");
            if (response.data.status === 1) {
                setServices(response.data.data);
                alert(response.data.message);
            } else {
                alert('Failed to fetch services');
            }
        } catch (error) {
            console.log(error);
            alert('Error occurred while fetching services');
        }
    };

    const addService = async () => {
        try {
            await axios.post("http://localhost:8080/addService", newService)
                .then((response) => {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.data) {
                        alert(error.response.data.message);
                    } else {
                        alert("An error occurred");
                    }
                });
            fetchServices();
            setNewService({
                service: "",
                cost: "",
                valid: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const deleteService = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/deleteService/${id}`)
                .then((response) => {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.data) {
                        alert(error.response.data.message);
                    } else {
                        alert("An error occurred");
                    }
                });
            fetchServices();
        } catch (error) {
            console.log(error);
        }
    };

    const updateService = async (id) => {
        try {
            await axios.put(`http://localhost:8080/updateService/${id}`, updatedService)
                .then((response) => {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.data) {
                        alert(error.response.data.message);
                    } else {
                        alert("An error occurred");
                    }
                });
            setUpdateServiceId(null);
            fetchServices();
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = (serviceId) => {
        setUpdateServiceId(serviceId);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUpdatedService((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    return (
        <div>
            <header id="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <h1>Financial Services</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* SERVICES SECTION */}
            <section id="services" className="py-5">
                <div className="container">
                    <div className="row">
                        {services.map((service) => (
                            <div className="col-md-4" key={service.serv_id}>
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h3>Service Plan {service.service}</h3>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">{service.cost}/Month</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit.</p>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <i className="fa fa-check"></i> Feature One
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fa fa-check"></i> Feature Two
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fa fa-check"></i> Feature Three
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fa fa-check"></i> Feature Four
                                            </li>
                                            <li className="list-group-item">
                                                <i className="fa fa-check"></i> Feature Five
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-block mt-2">Get It</button>
                                        <button className="btn btn-danger btn-block mt-2"
                                                onClick={() => deleteService(service.serv_id)}>Delete
                                        </button>
                                        <button className="btn btn-secondary btn-block mt-2"
                                                onClick={() => handleUpdate(service.serv_id)}>Update
                                        </button>
                                    </div>
                                    <div className="card-footer text-muted">1 Year Plan</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popup form for update */}
                {updateServiceId && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3>Update Service</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="service">Service</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="service"
                                        name="service"
                                        value={updatedService.service}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cost">Cost</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cost"
                                        name="cost"
                                        value={updatedService.cost}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="valid">Valid</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="valid"
                                        name="valid"
                                        value={updatedService.valid}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => updateService(updateServiceId)}
                                >
                                    Update
                                </button>
                                <button className="btn btn-secondary" onClick={() => setUpdateServiceId(null)}>Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </section>

            {/* FAQ */}
            <section id="faq" className="p-5 bg-dark text-white">
                <div className="container">
                    <h1 className="text-center">Frequently Asked Questions</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="accordion">
                                {/* FAQ items */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="accordion">
                                {/* FAQ items */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
