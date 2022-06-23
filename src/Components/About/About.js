import React,{ useState }  from 'react'
import { Container,Row,Col,Image,Modal,Button,Collapse } from 'react-bootstrap'
import './About.css'

const About = () => {

  const [lgShow, setLgShow] = useState(false);
  const [open, setOpen] = useState(false);


  return (
    <div id='about' className='pt-6 pb-9'>
      <Container>
        <Row>
        <Col md={6} sm={12}>
          <div className='img-about'>
          <Image src='/images/eli.jpg' rounded fluid/>
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
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio
                        </p>
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
                                            Work in a team to implement a knowledge management system for a government agency with 2229 active users. This platform currently has 511 knowledge (idea, suggestion, experience, articles, and scientific findings) that individuals share with each other.
                                            </li>
                                            <li>
                                            Redesign of admission and review suggestions system that is launched in 10 provinces of our country and at least 14 different organizations, and has at least 1500 active users in each organization.
                                            </li>
                                            <li>
                                            Develop an online store with a team of 4 developers that increased the owner's sales profit by 20% in one month.
                                            </li>
                                            <li>
                                            Work in a team to implement an academic counseling platform that got an official license from the Ministry of Education
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
