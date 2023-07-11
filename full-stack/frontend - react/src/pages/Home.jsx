import React from "react";
import laptop from "../images/laptop.png"

const home =()=>{
    return(
        <div>
            {/* <!-- SHOWCASE SLIDER --> */}
            <section id="hero" data-type="background" data-speed="5">
                {/* <!-- <img class="hero" src="assets/image/b4utake.png" alt="Hero Image"> --> */}
                <div class="container">
                    <div class="row">
                    <div class="col-md-6">
                        {/* <!-- Search Button --> */}
                    </div>
                    <div class="col-md-6">
                        {/* <!-- Search Button --> */}
                    </div>
                    </div>
                </div> 
            </section>

            {/* <!-- HOME ICON SECTION --> */}
            <section id="home-icons" class="py-5">
                <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4 text-center">
                        <i class="fa fa-user-o mb-2"></i>
                        <h3>User Accounts</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
                        </div>
                        <div class="col-md-4 mb-4 text-center">
                        <i class="fa fa-cloud mb-2"></i>
                        <h3>Sending Data</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
                        </div>
                        <div class="col-md-4 mb-4 text-center">
                        <i class="fa fa-cart-plus mb-2"></i>
                        <h3>Making Money</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- HOME HEADING SECTION --> */}
            <section id="home-heading" class="p-5">
                <div class="dark-overlay">
                <div class="row">
                    <div class="col">
                    <div class="container pt-5">
                        <h1>Are You Ready To Get Started?</h1>
                        <p class="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptates, consequatur labore placeat doloremque dignissimos exercitationem esse fuga laborum ex!</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- INFO SECTION --> */}
            <section id="info" class="py-3">
                <div class="container">
                <div class="row">
                    <div class="col-md-6 align-self-center">
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae eaque quos eligendi, laboriosam. Culpa consequuntur illum facere id molestias.</p>
                    <a href="#" class="btn btn-outline-danger btn-lg">Learn More</a>
                    </div>
                    <div class="col-md-6">
                    <img src={laptop} class="img-fluid" alt=""/>
                    </div>
                </div>
                </div>
            </section>
            
            {/* <!-- NEWSLETTER SECTION --> */}
            <section id="newsletter" class="text-center p-5 bg-dark text-white">
            <div class="row">
                <div class="col">
                    <h1>Signup For Our Newsletter</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam similique esse assumenda quasi repellendus illum perferendis quos aliquid possimus.</p>
                    <form class="form-inline justify-content-center">
                        <label class="sr-only" for="name">Name</label>
                        <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Name"/>

                        <label class="sr-only" for="email">Email</label>
                        <input type="email" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email"/>
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            </section>
        </div>
    )
}

export default home