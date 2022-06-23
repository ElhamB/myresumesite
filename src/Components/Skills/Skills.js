import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Progress from '../utility/Progressbar/Progressbar'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='pt-6 pb-6'>
      <Container>
        <Row>
          <Col className='text-center'>
          <div className='section-title'>
                            <h3>My Skills
                            <div className='title-effect'>
                                <div className='bar bar-top'></div>
                                <div className='bar bar-right'></div>
                                <div className='bar bar-bottom'></div>
                                <div className='bar bar-left'></div>
                            </div>
                            </h3>
                            <h5 className='mb50'>What I am <strong>Great</strong> at</h5>
                        </div>
          </Col>
       
        </Row>
        <Row>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="80" title="React.js"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="70" title="Redux"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="50" title="TypeScript"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="100" title="HTML5"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="100" title="CSS3"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="90" title="Saas"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="85" title="JavaScript(ES6)"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="90" title="jQuery"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="100" title="Bootstrap"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="80" title="UI/UX"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="85" title="SQL/MySQL"/>
        </Col>
        <Col md={3} sm={6} xs={12}>
       		<Progress done="60" title="Git/Github"/>
        </Col>
      
        </Row>
      </Container>
    </div>
  )
}

export default Skills
