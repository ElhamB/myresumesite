import React,{ useState }  from 'react'
import { Container,Row,Col,Image,Modal,Collapse } from 'react-bootstrap'
import './About.css'

const About = () => {

  const [lgShow, setLgShow] = useState(false);
  const [open, setOpen] = useState(false);


  return (
    <div id='about' className='pt-6 pb-9'>
      <Container>
        <Row>
        <Col className='d-none d-md-block' md={6} sm={12}>
          <div className='img-about'>
          <Image src='/images/eli.jpg' alt='Elham Bagheri' rounded fluid/>
          <span className='square-border'></span>
          <span className='square-solid'></span>
          </div>
          </Col>
          <Col className='about-sec' md={6} sm={12}>
          <div className='section-title'>     
                            <h3>About me
                            <div className='title-effect'>
                                <div className='bar bar-top'></div>
                                <div className='bar bar-right'></div>
                                <div className='bar bar-bottom'></div>
                                <div className='bar bar-left'></div>
                            </div>
                            </h3>
                            <h5>A <strong>Front-end Developer</strong> based in Iran</h5>
                        </div>
                        <p>
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                        I have worked as a front-end developer in IT and software development companies. I have more than 4 years of experience in React, Redux, Typescript, JavaScript(ES6), jQuery, Html5, CSS3, Saas, and Bootstrap. Besides, I am familiar with ASP.NET and worked in ASP.NET MVC and ASP.NET Core. My experience in large-scale projects with many details and challenges makes me superior. I have the experience of implementing more than 30 projects in different fields.                        </p>
               <div>
                <a className='btn-download' href='#'>Download CV</a><a className='btn-send' onClick={() => setLgShow(true)}>More About Me</a>
              </div>
          </Col>
         
        </Row>
      </Container>
      <Modal className='personal-modal' size="lg" show={lgShow} onHide={() => setLgShow(false)} >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Container>
  <Row>
    <Col md={12}>
    <h3 className='title-sub'>Personal Info<span></span></h3>
    <ul className='personal-list'>
      <li><span className='title'>First Name: </span>Elham</li>
      <li><span className='title'>Last Name: </span>Bagheri</li>
      <li><span className='title'>Email: </span>it.ebagheri@gmail.com</li>
      <li><span className='title'>Phone(whatspp): </span>(+98)9351520241</li>
      <li><span className='title'>Nationality: </span>Iran</li>
      <li><span className='title'>Age: </span>31</li>
      <li><span className='title'>Skype: </span>e.bagheri_1</li>
      <li><span className='title'>Languages: </span>English,Persion</li>
    </ul>
    </Col>
    <Col md={12}>
    <h3 className='title-sub'>Work Experience<span></span></h3>

                <div className="timeline timeline-second-style ">  
                                      <div className="timeline-item ">
                                          <div className="left-part">
                                              <span>Aug 2017 - Jan 2021</span>
                                          </div>
                                          <div className="divider"></div>
                                          <div className="right-part">
                                         <h4>Front-end Developer</h4>
                                         <span>Jadooye Fekr Software Company</span>
                                        <a className='btn-more'  onClick={() => setOpen(!open)}
                                          aria-controls="moredetails-1"
                                          aria-expanded={open}>more</a>
                                        <Collapse in={open}>
                                          <div className='collapse-con' id="moredetails-1">
                                          <ul>
                                              <li>
                                            Increased scalability, maintainability, and responsiveness of cross-browser code of the company's old projects by 53%.
                                            </li>
                                            <li>
                                            Developed an online store with a team of 4 developers that increased the owner's sales profit by 20% in one month.
                                            </li>
                                            <li>
                                          	Recommending solutions for a user-friendly interface with the design team.
                                            </li>
                                            <li>
                                            	Reduced development time by customizing a CMS and Bootstrap 4 RTL.
                                            </li>
                                          </ul>
                                          </div>
                                        </Collapse>
                                          </div>
                                      </div>
                                      <div className="timeline-item ">
                                          <div className="left-part">
                                              <span>May 2017 - Aug 2017</span>
                                          </div>
                                          <div className="divider"></div>
                                          <div className="right-part">
                                         <h4>Front-end Developer Intern</h4>
                                         <span>Jadooye Fekr Software Company</span>
                                          </div>
                                      </div>
                                  
                                  </div>
    </Col>
    <Col md={12}>
    <h3 className='title-sub'>Education<span></span></h3>

                <div className="timeline timeline-second-style ">  
                                      <div className="timeline-item ">
                                          <div className="left-part">
                                              <span>Sep 2014 – Sep 2016</span>
                                          </div>
                                          <div className="divider"></div>
                                          <div className="right-part">
                                         <h4 >M.Sc. in Information Technology Engineering</h4>
                                         <span>Mazandaran University of Science and Technology </span>
                                          </div>
                                      </div>
                                      <div className="timeline-item ">
                                          <div className="left-part">
                                              <span>Sep 2009 – Sep 2013 </span>
                                          </div>
                                          <div className="divider"></div>
                                          <div className="right-part">
                                         <h4 >B.Sc. in Information Technology Engineering[full scholarship]   </h4>
                                          <span >University of Mazandaran</span>
                                          </div>
                                      </div>
                                  
                                  </div>
    </Col>
  </Row>
</Container>
        </Modal.Body>
      </Modal>



    </div>
    
  )
}

export default About
