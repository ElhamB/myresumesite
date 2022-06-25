import React from "react";
import { Container,Row,Col} from 'react-bootstrap'
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div id="footer" className='pt-4 pb-2'>
<Container>
    <Row className="justify-content-center">
        <Col className="text-center">
        <span className="logoType my-3">Elham Bagheri</span>
                <div className="mb-3">
      
                            <a href="https://www.linkedin.com/in/elhambagheri91/" className="social-link" >
                                <span className="social-icon ">
                                <i className="fa fa-linkedin"></i>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/fersuweb/" className="social-link " >
                                <span className="social-icon ">
                                    <i className="fa fa-instagram"></i>
                                </span>
                            </a>
                            <a href="https://telegram.me/ebagheri91" className="social-link " >
                                <span className="social-icon ">
                                    <i className="fa fa-send"></i>
                                </span>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=989351520241" className="social-link " >
                                <span className="social-icon ">
                                    <i className="fa fa-whatsapp"></i>
                                </span>
                            </a>
                            <a href="https://github.com/ElhamB" className="social-link " >
                                <span className="social-icon ">
                                    <i className="fa fa-github"></i>
                                </span>
                            </a>
                            {/* <a href="#" className="social-link " >
                                <span className="social-icon ">
                                    <i className="fa fa-pinterest"></i>
                                </span>
                            </a> */}
                            {/* <a href="#" className="social-link " >
                                <span className="social-icon ">
                                    <i className="fa fa-dribbble"></i>
                                </span>
                            </a> */}
        </div>
        <p>© 2022 copyright. all right reserved</p>
        </Col>
    </Row>
</Container>
            </div>
        )
    }
} 
export default Footer