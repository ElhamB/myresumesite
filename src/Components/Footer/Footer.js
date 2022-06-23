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
      
                            <a href="https://www.linkedin.com/in/elhambagheri91/" class="social-link" >
                                <span class="social-icon ">
                                <i className="fa fa-linkedin"></i>
                                </span>
                            </a>
                            <a href="https://www.instagram.com/fersuweb/" class="social-link " >
                                <span class="social-icon ">
                                    <i class="fa fa-instagram"></i>
                                </span>
                            </a>
                            <a href="https://telegram.me/ebagheri91" class="social-link " >
                                <span class="social-icon ">
                                    <i class="fa fa-send"></i>
                                </span>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=989351520241" class="social-link " >
                                <span class="social-icon ">
                                    <i class="fa fa-whatsapp"></i>
                                </span>
                            </a>
                            <a href="https://github.com/ElhamB" class="social-link " >
                                <span class="social-icon ">
                                    <i class="fa fa-github"></i>
                                </span>
                            </a>
                            {/* <a href="#" class="social-link " >
                                <span class="social-icon ">
                                    <i class="fa fa-pinterest"></i>
                                </span>
                            </a> */}
                            {/* <a href="#" class="social-link " >
                                <span class="social-icon ">
                                    <i class="fa fa-dribbble"></i>
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