import React from 'react';
import "./footer.css";
import {FaTwitter} from 'react-icons/fa'
import {FaTrello} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'

const MyFooter = () => {
    return(
        <div className="footer">
            <a href="" target="_blank">
                <FaTwitter className="footer-hover bigger-icon"/>
            </a>

            <a href="" target="_blank">
                <FaDiscord className="footer-hover bigger-icon"/>
            </a>

            <a href="" target="_blank">
                <FaTrello className="footer-hover bigger-icon"/>
            </a>
        </div>
    );
}

export default MyFooter;