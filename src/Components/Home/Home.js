import React, { useEffect, useRef } from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import Typed from "typed.js";
import './Home.css'
const Home = () => {
   // Create Ref element.
   const el = useRef(null)

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ["Front-end Developer", "UI/UX Designer"], 
       startDelay: 300,
       typeSpeed: 100,
       backSpeed: 100,
       backDelay: 100,
       loop: true,
     });
 
     // Destropying
     return () => {
       typed.destroy()
     }
   }, [])
 
   return (
     <div className='bg-home' id='home'>
       <Container>
         <Row>
           <Col className='top-sec' sm={12} md={6}>
             <h1>Hello, I'm <strong>Elham Bagheri</strong><br/>
        {/* Element to display typing strings */}
        <span ref={el}></span>
        <br/>
       based in Iran, over 4 years of professional experience</h1>
<div>
<a className='btn-download' href='#'>Download CV</a><a className='btn-send' href='#contact'>Send Message</a>
</div> 
<div className="social-media d-none d-lg-block ">
					<p>Follow me</p>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/elhambagheri91/" target="_blank" rel="noopener noreferrer">
						<i className="fa fa-linkedin"></i>
						</a>
					</li>
          <li>
						<a href="https://github.com/ElhamB" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-github"></i>
						</a>
					</li>
					<li>
						<a href="https://api.whatsapp.com/send?phone=989351520241" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-whatsapp "></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/fersuweb/" target="_blank" rel="noopener noreferrer">
						<i className="fa fa-instagram "></i>
						</a>
					</li>

				</ul>
			</div>
           </Col>
           <Col sm={12} md={6}>
          <Image src="/images/eli.jpg" className='d-none d-md-block img-home' alt="Elham Bagheri" rounded/>
           </Col>
         </Row>
       </Container>
     
      
     </div>
   )
}



export default Home
