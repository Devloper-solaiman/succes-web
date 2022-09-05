import React from "react"
import { Image } from "react-bootstrap";
import './Footer.css'

const Footer = () =>
    <div className="mt-5">
        <footer className=" rounded  bg-success">
            <div className="container  text-md-left">
                <div className="row">
                    <div className=" text-start mt-3">

                        <Image className='apple-logo ' src="https://wallpaperaccess.com/full/404757.jpg" rounded />

                    </div>
                    <h4>Porgramming Hero Web Course <a href="">  <Image className='apple-logo ' src="https://yt3.ggpht.com/ytc/AMLnZu_JuiwUKA8OSoT97avCn9xufJV0LsQFYJkMYdAq=s900-c-k-c0x00ffffff-no-rj" rounded /></a>
                    </h4>
                </div>

            </div>

            <div className="footer-copyright bg-dark text-center py-1 text-light">© 2022 Copyright:
                <a href="https://github.com/Porgramming-Hero-web-course/money-master-DevSolaiman"><small> programing Hero GitHu</small>  </a>
            </div>

        </footer>
    </div>

export default Footer