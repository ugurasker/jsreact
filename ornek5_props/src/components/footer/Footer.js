import React from 'react';
import "./Footer.css";

function Footer() {
    const yil = new Date().getFullYear();
    return (
        <div>
            <p>Copyright ⓒ {yil}</p>
        </div>
    );
};

export default Footer;
