import React from 'react'
import { Container,Row,Col,Form,FloatingLabel } from 'react-bootstrap'
import { Formik} from 'formik';
 import * as yup from 'yup';

import './Contact.css'
const Contact = () => {

  const schema = yup.object().shape({
    Name: yup.string().min(3, 'Too Short!').required('Name is required'),
    Email: yup.string().email('Invalid email').required('Email is required'),
    Comment: yup.string().min(5, 'Too Short!').required('Comment is required'),
  });
  
  return (
    <div id="contact" className='pt-6 pb-6'>
     <Container>
        <Row className="justify-content-center">
          <Col className="text-center" lg="7" sm="8">
            <div className="section-title">
              <h3>
                Contact us
                <div className="title-effect">
                  <div className="bar bar-top"></div>
                  <div className="bar bar-right"></div>
                  <div className="bar bar-bottom"></div>
                  <div className="bar bar-left"></div>
                </div>
              </h3>
              <h5 className="mb50">
                Any question or remarks? just write me a message!
              </h5>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center mt-5'>      
          <Col lg="4" md="6">
            <p>
            Always available for freelancing if the right project comes along, Feel free to contact me.
            </p>
            <ul className='ul-contact'>
              <li><i className='fa fa-envelope me-2'></i> <a href="mailto:it.ebagheri@gmail.com">it.ebagheri@gmail.com</a></li>
              <li><i className='fa fa-whatsapp me-2'></i> <a href="https://api.whatsapp.com/send?phone=989351520241">+98 935 152 0241</a></li>
              <li><i className='fa fa-skype me-2'></i><a href='skype:e.bagheri_1?chat'> Start Chat</a></li>
            </ul>
          </Col>
          <Col lg="6" md="6">
            <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        Name: '',
        Email: '',
        Comment: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <FloatingLabel label="Name" as={Col} md="6" controlId="validationFormikName">
              <Form.Control
                type="text"
                name="Name"
                placeholder="Name"
                value={values.Name}
                onChange={handleChange}
                isInvalid={!!errors.Name}
              />
              <Form.Control.Feedback type="invalid"> {errors.Name}</Form.Control.Feedback>
            </FloatingLabel>   
            <FloatingLabel label="Email" as={Col} md="6" controlId="validationFormikEmail">
              <Form.Control
                type="email"
                name="Email"
                placeholder="Email"
                value={values.Email}
                onChange={handleChange}
                isInvalid={!!errors.Email}
              />
            <Form.Control.Feedback type="invalid">
                  {errors.Email}
                </Form.Control.Feedback>
            </FloatingLabel>
          </Row>
          <Row>
            <FloatingLabel className="mb-3" label="Subject" as={Col} md="12" controlId="validationFormikSubject">
              <Form.Control
                type="text"
                placeholder="Subject"
                name="Subject"
                value={values.Subject}
                onChange={handleChange}
              />
            </FloatingLabel>
            
            <FloatingLabel className="mb-3" as={Col} md="12" controlId="floatingTextarea2" label="Comment">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      name="Comment"
       value={values.Comment}
       onChange={handleChange}
       isInvalid={!!errors.Comment}
       style={{ height: '125px' }}
    />
       <Form.Control.Feedback type="invalid">
                {errors.Comment}
              </Form.Control.Feedback>
  </FloatingLabel>
          </Row>
         <button className='btn-download' type='submit'>Submit</button>
        
        </Form>
      )}
    </Formik>
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Contact
