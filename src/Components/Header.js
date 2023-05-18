import {Link} from "react-router-dom";
import {RiShoppingCart2Fill} from "react-icons/ri"
import {IoMdPersonAdd} from "react-icons/io"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "../index.css"
import {useRef, useState} from "react";

export function Header() {
    const linkUnderline = useRef('')
    const offcanvas = useRef('')
    //this function changes linkUnderline styles
    // this function runs every time you hover or blur the links in the navbar in large screen
    // this function gets the width and event
    function offcanvasClose(){
        if(window.innerWidth<768){
            const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvas)
            console.log(bsOffcanvas)
        }
    }
    function changeUnderlineLinkStyle(width, event) {
        linkUnderline.current.style.width = (width) + "px"
        linkUnderline.current.style.left = event.target.getBoundingClientRect().left + "px"
        linkUnderline.current.style.top = (event.target.getBoundingClientRect().top+event.target.getBoundingClientRect().height) + "px"
    }

    return (
        <header>
            <div ref={linkUnderline}
                 style={{height: "2px", backgroundColor: "brown"}}
                 className={"link-underline d-lg-block d-none position-absolute"}></div>
            <div className={"container"}>
                <nav className={"navbar navbar-expand-lg"}>
                    <img style={{width: "10rem"}}
                         className={"navbar-brand"}
                         src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg"/>
                    <button className="border-0 fs-3 navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasEnd">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas-lg flex-grow-1 mt-lg-3 offcanvas-end" tabIndex="-1" id="offcanvasEnd"
                         ref={offcanvas} aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasTopLabel">ComfySloth</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    data-bs-target="#offcanvasEnd" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body pt-0">
                            <hr className={"d-lg-none"}/>
                            <div className={"me-auto w-100"}>
                                <ul className="navbar-nav w-100 row flex-row justify-content-lg-center">
                                    <li className="nav-item col-lg-auto col-6">
                                        <Link onClick={offcanvasClose}
                                            onMouseLeave={(e) => changeUnderlineLinkStyle(0, e)}
                                              onMouseEnter={(e) => changeUnderlineLinkStyle(e.target.getBoundingClientRect().width, e)}
                                              to={"/"} className={"text-decoration-none nav-link me-2 active"}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item col-lg-auto col-6">
                                        <Link onClick={offcanvasClose}
                                            onMouseLeave={(e) => changeUnderlineLinkStyle(0, e)}
                                              onMouseEnter={(e) => changeUnderlineLinkStyle(e.target.getBoundingClientRect().width, e)}
                                              to={"about"} className={"text-decoration-none nav-link me-2"}>
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item col-lg-auto col-6">
                                        <Link onClick={offcanvasClose}
                                            onMouseLeave={(e) => changeUnderlineLinkStyle(0, e)}
                                              onMouseEnter={(e) => changeUnderlineLinkStyle(e.target.getBoundingClientRect().width, e)}
                                              to={"products"} className={"text-decoration-none nav-link me-2"}>
                                            Products
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <hr className={"d-lg-none"}/>
                            <div className={"d-flex justify-content-end"}>
                                <div className={"col-lg-auto col-6"}>
                                    <Link to={"cart"} className={"text-decoration-none text-black"}>
                                        <div className={"d-flex"}>
                                            <h4 className={"me-2"}>Cart</h4>
                                            <span className={"position-relative"}>
                                            <span
                                                className={"position-absolute rounded-circle d-flex justify-content-center align-items-center text-white"}
                                                style={{
                                                    background: "var(--primary-color-brown)",
                                                    height: "1rem",
                                                    width: "1rem",
                                                    top: "-20%",
                                                    right: "-20%",
                                                    fontSize:"small"
                                                }}>0</span>
                                            <RiShoppingCart2Fill className={"fs-4"}/>
                                        </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className={"col-lg-auto col-6"}>
                                    <a href={"#"} className={"text-decoration-none text-black"}>
                                        <div className={"d-flex ms-4"}>
                                            <h4 className={"me-2"}>Login</h4>
                                            <IoMdPersonAdd className={"fs-3"}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}