import React from "react";

const footer = () =>{
    return(
        <div>
        <footer id="main-footer" class="text-center p-4">
            <div class="container">
            <div class="row">
                <div class="col">
                <p>Copyright 2023 &copy; Web Application</p>
                </div>
            </div>
            </div>
        </footer>


       { /*   <!-- VIDEO MODAL --> */ }
        <div class="modal fade" id="videoModal">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                <button class="close" data-dismiss="modal"><span>&times;</span></button>
                <iframe src="" height="350" width="100%" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default footer