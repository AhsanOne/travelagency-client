import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div class="error-actions mt-5">
                            <Link className="btn btn-primary" to="/">Take Me Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
