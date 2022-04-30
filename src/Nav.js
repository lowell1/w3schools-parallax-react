import React from "react";

const links =   [
                    {href: "#home", text: "HOME"},
                    {href: "#about", text: "ABOUT", icon: "fa fa-user"},
                    {href: "#portfolio", text: "PORTFOLIO", icon: "fa fa-th"},
                    {href: "#contact", text: "CONTACT", icon: "fa fa-envelope"},
                ]

export default function Nav() {
    return (
        <div className="w3-top">
            <div className="w3-bar w3-hide-small">
                {
                    links.map(link => 
                        <a href={link.href} className="w3-bar-item w3-button">
                            {link.icon && <i className={link.icon}></i>}
                            {` ${link.text}`}
                        </a>)
                }
            </div>
        {/* <div class="w3-bar" id="myNavbar">
            <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
                <i class="fa fa-bars"></i>
            </a>
            <a href="#home" class="w3-bar-item w3-button">HOME</a>
            <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
            <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                <i class="fa fa-search"></i>
            </a>
        </div> */}

        {/* <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
            <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
            <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
            <a href="#" class="w3-bar-item w3-button">SEARCH</a>
        </div> */}
    </div>
    );
}