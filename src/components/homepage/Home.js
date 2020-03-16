import React from 'react';
import './homepage.css'

const Home = () => {

    return(
        <div className="nav-padding home-notice">
            <h1>BDOBarter</h1>
            <br/>
            <h4>
                Is a passion project intended to provide
                quality of life features you can use while bartering.
            </h4>
            <br/>
            <h5>
                At present the only feature built is the weight
                calculator for inventory management on your boat.
            </h5>

            <br/>
            <h5>
                This project is under active development. If
                you have any feature you would like added, reach out
                to me on the links below.
            </h5>

            <div className="link-row">
                <div className="content-link">
                    coming soon™
                </div>
                
                <div className="content-link">
                    coming soon™
                </div>

                <div className="content-link">
                    coming soon™
                </div>
            </div>
        </div>
    );
}

export default Home;