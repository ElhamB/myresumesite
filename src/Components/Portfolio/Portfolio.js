import React,{useEffect,useState} from 'react'
import { Container,Row,Col,Modal} from 'react-bootstrap'
import mixitup from 'mixitup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Fancybox from './Fancybox';

import './Portfolio.css'

const Portfolio = () => {

  const [lgShow, setLgShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  useEffect(() => {
    mixitup(".items", {
      selectors: {
        target: ".item",
      },
      animation: {
        duration: 500
      },
      load: {
        filter: '.all'
    }
    });
  }, []);  
  return (
    <div id='portfolio' className='pt-6 pb-6'>
          <Container>
        <Row className='justify-content-center'>
          <Col className='text-center' lg="7" sm="8">
          <div className='section-title'>
                            <h3>My Portfolio
                            <div className='title-effect'>
                                <div className='bar bar-top'></div>
                                <div className='bar bar-right'></div>
                                <div className='bar bar-bottom'></div>
                                <div className='bar bar-left'></div>
                            </div>
                            </h3>
                            <h5 className='mb50'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites and online stores.</h5>
                        </div>
          </Col>
  <Col lg="12" className='text-center'>
    <div className="controls">
       <ul>
       <li className="control mixitup-control" data-filter=".all" >All</li>
        <li className="control mixitup-control" data-filter=".web">Website design</li>
        <li className="control mixitup-control" data-filter=".ui">UI/UX</li>
        <li className="control mixitup-control" data-filter=".photo">Photography</li>
    </ul>
  </div>

          </Col>
        </Row>
<Row className='items'>
  <Col md="4" sm="6" className="item web all">
	<figure className="portfolio-con">
						<img src="/images/portfolio/16.jpg" alt="img25"/>
						<figcaption>
							<h4>Vila rent</h4>
							<a onClick={() => setLgShow(true)}>View more</a>
						</figcaption>			
					</figure>
      
    </Col>
    <Col md="4" sm="6" className="item web all">
    <figure className="portfolio-con">
						<img src="/images/portfolio/11.jpg" alt="img25"/>
						<figcaption>
							<h4>Vila rent</h4>
							<a onClick={() => setLgShow(true)}>View more</a>
						</figcaption>			
					</figure>
      
</Col>
<Col md="4" sm="6" className="item ui all">
<figure className="portfolio-con">
						<img src="/images/portfolio/12.jpg" alt="img25"/>
						<figcaption>
							<h4>Vila rent</h4>
							<a onClick={() => setLgShow(true)}>View more</a>
						</figcaption>			
					</figure>
      
</Col>
<Col md="4" sm="6" className="item photo all">
<figure className="portfolio-con">
						<img src="/images/portfolio/13.jpg" alt="img25"/>
						<figcaption>
							<h4>Vila rent</h4>
							<a onClick={() => setLgShow(true)}>View more</a>
						</figcaption>			
					</figure>
      
</Col>

        </Row>
        </Container>

        <Modal className='portfolio-modal' fullscreen={fullscreen} show={lgShow} onHide={() => setLgShow(false)} >
        <Modal.Header closeButton>
          <Modal.Title>Academic counseling platform (Noayand) </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container fluid>
  <Row>
    <Col lg="7" md={8} >
      <div className='img-portfolio text-center mb-3'>
      <img src="/images/portfolio/13.jpg" alt="img25"/>
      </div>
    <Fancybox>
    <OwlCarousel id='galleryProduct' className='owl-theme' margin={10} nav>
    <div className='item'>
    <a data-fancybox="gallery" href="/images/portfolio/13.jpg">
          <img alt="" src="/images/portfolio/13.jpg" />
        </a>
    </div>
    <div className='item'>
    <a data-fancybox="gallery" href="/images/portfolio/12.jpg">
          <img alt="" src="/images/portfolio/12.jpg" />
        </a>
    </div>
    <div className='item'>
    <a data-fancybox="gallery" href="/images/portfolio/11.jpg">
          <img alt="" src="/images/portfolio/11.jpg" />
        </a>
    </div>
    <div className='item'>
    <a data-fancybox="gallery" href="/images/portfolio/16.jpg">
          <img alt="" src="/images/portfolio/16.jpg" />
        </a>
    </div>
</OwlCarousel>
</Fancybox>
    </Col>
    <Col lg="5" md={4}>
  <section>
  <h5>Academic counseling platform (Noayand) </h5>
  <div className='date-co'>
    <i className='fa fa-calendar me-2'></i><span>Jan 2020 - Jan 2021</span>
    <i className='fa fa-briefcase ms-3 me-2'></i><span>Associated with  Jadooye Fekr Co.</span>
     </div>
     <a className='btn-download' href='#'>Show Project</a>
     <div>
      <p>
      Noayand, the first and most complete online counseling and planning system in the country, was launched in March 2017 with the aim of creating a suitable and secure platform for counselors, students and their parents to communicate, and operates in the form of a website and a mobile application. It has an official license from the Ministry of Education.
      </p>
     </div>
     <div className='ul-skills'>
      Skills: 
      <ul>
      <li>HTML5</li>
      <li>CSS</li>
      <li>javascript</li>
      <li>jquery</li>
      </ul>
     </div>
  </section>
    </Col>
  </Row>
</Container>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Portfolio


