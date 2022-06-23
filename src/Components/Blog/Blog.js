import React,{useState} from "react";
import { Container, Row, Col,Modal } from "react-bootstrap";
import "./Blog.css";
const Blog = () => {
  const[lgShow,setLgShow]=useState(false);
  return (
    <div id="blog" className="pt-6 pb-6">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center" lg="7" sm="8">
            <div className="section-title">
              <h3>
                My Blog
                <div className="title-effect">
                  <div className="bar bar-top"></div>
                  <div className="bar bar-right"></div>
                  <div className="bar bar-bottom"></div>
                  <div className="bar bar-left"></div>
                </div>
              </h3>
              <h5 className="mb50">
                The latest news and articles about technology
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="6">
            <article className="blog-post" onClick={()=>setLgShow(true)}>
              <div className="blog-img">
              <img src="/images/blog/news1.jpg" />
              <div className="date">
                <span>05</span>
                <small>Aug</small>
              </div>
              </div>
              <div className="blog-caption">
                <h4>
                  Top Web Design Trends for 2022
                </h4>
                <p>
                  Staying current on the top web design trends and standards is
                  crucial to the success of your website. Here are the latest
                  web design trends and standards for 2021.
                </p>
                <div className="btn-readmore">
                  Read more <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </article>
          </Col>
          <Col md="4" sm="6">
            <article className="blog-post" onClick={()=>setLgShow(true)}>
              <div className="blog-img">
              <img src="/images/blog/news2.jpg" />
              <div className="date">
                <span>08</span>
                <small>Jun</small>
              </div>
              </div>
              <div className="blog-caption">
                <h4>
       10 Best shop Website Design 
                </h4>
                <p>
                Almost all brands turn to the internet as a great medium for marketing and business growth in this modern era. Undeniably, the news industry has not been repulsive with this effective sharing of useful articles.
                </p>
                <div className="btn-readmore">
                  Read more <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </article>
          </Col>
          <Col md="4" sm="6">
            <article className="blog-post" onClick={()=>setLgShow(true)}>
              <div className="blog-img">
              <img src="/images/blog/news4.png" />
              <div className="date">
                <span>12</span>
                <small>Jul</small>
              </div>
              </div>
              <div className="blog-caption">
                <h4>
                top tips for international seo
                </h4>
                <p>
                The best search engines such as Google, Bing, and even Baidu change the algorithms which control their search results frequently.

                </p>
                <div className="btn-readmore">
                  Read more <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </article>
          </Col>

        </Row>
      </Container>
      <Modal className="blogModal" size="lg" show={lgShow} onHide={()=>setLgShow(false)}>
      <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Container>
  <Row>
    <Col  md={12}>
      <article className="blog-details">
      <img src="/images/blog/news4.png" className="main-img" />
      <h2 >Top Web Design Trends for 2022</h2>
      <div className="mb-2"><i className="fa fa-calendar me-2"></i> 10 jun</div>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


      </p>
      </article>
     
 
    </Col>
  
  </Row>
</Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Blog;
