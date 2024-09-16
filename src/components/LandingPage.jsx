import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Stack,
  Dropdown,
  Carousel,
  Button,
} from "react-bootstrap";
import "../styles/LandingPage.css";

const cardData = [
  {
    id: 1,
    title: "John Doe",
    description: "CEO",
    image: "/skills2.svg",
  },
  {
    id: 2,
    title: "Jane Smith",
    description: "CTO",
    image: "/skills1.svg",
  },
  {
    id: 3,
    title: "Alice Johnson",
    description: "Lead Developer",
    image: "/skills4.svg",
  },
  {
    id: 4,
    title: "Bob Brown",
    description: "UX Designer",
    image: "/skills3.svg",
  },
  {
    id: 5,
    title: "Charlie Davis",
    description: "Marketing Manager",
    image: "/skills2.svg",
  },
  {
    id: 6,
    title: "Eve Miller",
    description: "Product Owner",
    image: "/skills1.svg",
  },
  {
    id: 7,
    title: "Frank Wilson",
    description: "QA Engineer",
    image: "/skills4.svg",
  },
  {
    id: 8,
    title: "Grace Lee",
    description: "Data Scientist",
    image: "/skills3.svg",
  },
];

const chunkArray = (array, size) => {
  return array.reduce((acc, _, index) => {
    if (index % size === 0) acc.push(array.slice(index, index + size));
    return acc;
  }, []);
};

const LandingPage = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const cardChunks = chunkArray(cardData, 4);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="white" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#">
            <img src="/logo.svg" alt="Logo" width="40" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#instructor">Instructors</Nav.Link>
              <Nav.Link href="#placement">Placements</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="#" className="d-flex align-items-center">
                Go to Website
              </Nav.Link>
              <Nav.Link href="#">
                <img
                  src="/bell.svg"
                  alt="Notifications"
                  width="24"
                  height="24"
                />
              </Nav.Link>

              {/* Dropdown for User Profile */}
              <Dropdown show={showDropdown} onToggle={toggleDropdown}>
                <div
                  className="d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={toggleDropdown}
                >
                  
                  <img
                    src="/user.svg"
                    alt="User"
                    className="rounded-circle"
                    width="30"
                    height="30"
                  />{" "}
                  
                  <div
                    className="ms-2 d-flex flex-column text-start"
                    style={{ fontSize: "12px" }}
                  >
                    <span>Prateek A.</span>
                    <small className="text-muted">Developer</small>
                  </div>
                </div>

                {/* Dropdown Menu */}
                <Dropdown.Menu className="custom-dropdown mt-2">
                  <Dropdown.Item href="/login">Login</Dropdown.Item>
                  <Dropdown.Item href="/master">Master Form</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      <section className="banner text-center">
        <h1>Welcome to Our Courses Platform</h1>
        <p>Your journey to excellence starts here.</p>
      </section>

      {/* Four Boxes Section */}
      <section id="courses" className="py-4">
        <Container className="containerClass" style={{ maxWidth: "70%" }}>
          <Row>
            {[
              {
                title: "Completed Courses",
                image: "/1.svg",
              },
              {
                title: "Rewards",
                image: "/2.svg",
              },
              {
                title: "Challenges",
                image: "/3.svg",
              },
              {
                title: "Live Classes",
                image: "/4.svg",
              },
            ].map((card, index) => (
              <Col md={3} sm={6} className="mb-2" key={index}>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center custom-stack"
                  gap={2}
                  md={3}
                  sm={4}
                  xs={6}
                >
                  <div className="image-wrapper">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="img-fluid"
                      style={{ maxWidth: "50px", minHeight: "40px" }}
                    />
                  </div>
                  <div className="text-center">
                    <h6>{card.title}</h6>
                  </div>
                </Stack>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Six Cards Section */}
      <section className="py-5">
        <Container className="sixCards">
          <h2 className="py-4">Recently Enrolled Courses</h2>
          <Row>
            {[
              {
                title: "Learn React",
                description: "Master React with ease.",
                image: "/1.jpg",
              },
              {
                title: "JavaScript Essentials",
                description: "Get the basics of JavaScript.",
                image: "/2.jpg",
              },
              {
                title: "CSS for Beginners",
                description: "Style your websites like a pro.",
                image: "/3.jpg",
              },
              {
                title: "Advanced Node.js",
                description: "Dive deep into backend development.",
                image: "/4.jpg",
              },
              {
                title: "Python Programming",
                description: "Become a Python expert.",
                image: "/5.jpg",
              },
              {
                title: "Data Science Bootcamp",
                description: "Learn data science from scratch.",
                image: "/6.jpg",
              },
            ].map((card, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="h-100 d-flex flex-column">
                  <div className="d-flex justify-content-center align-items-center p-3">
                    <Card.Img src={card.image} alt={card.title} />
                  </div>
                  <Card.Body className="py-4">
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="p-4 m-3"></Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Image on Right, Description on Left */}
      <section id="placement" className="py-5">
        <Container>
          <Row>
            <Col md={7} className="content-col">
              <h6>What's New</h6>
              <h2>Master the skills to drive your career</h2>
              <p className="skillDesc">
                Get certified, master modern tech skills, and level up your
                career — whether you're starting out or a seasoned pro. 95% of
                eLearning learners report our hands-on content directly helped
                their careers.
              </p>

              <Row>
                {[
                  {
                    title: "Stay motivated with engaging instructors",
                    image: "/1.svg",
                  },
                  {
                    title: "Keep up with in the latest in cloud",
                    image: "/2.svg",
                  },
                  {
                    title: "Get certified with 100+ certification courses",
                    image: "/3.svg",
                  },
                  {
                    title:
                      "Build skills your way, from labs to courses Classes",
                    image: "/4.svg",
                  },
                ].map((card, index) => (
                  <Col md={6} sm={6} xs={12} className="mb-4" key={index}>
                    <Stack
                      direction="horizontal"
                      className="h-100 justify-content-start align-items-center"
                      gap={3}
                    >
                      <div className="image-wrapper">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="img-fluid"
                          style={{ maxWidth: "55px", minHeight: "40px" }}
                        />
                      </div>
                      <div>
                        <h6 className="placementTitle">{card.title}</h6>
                      </div>
                    </Stack>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={5} className="image-col">
              <img src="/skills.svg" alt="Description" className="img-fluid full-screen-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Four Cards in a Row Carousel*/}
      <section id="instructor" className="featured py-5">
        <Container className="instructor" style={{ maxWidth: "70%" }}>
          <h2 className="text-center pb-3">Featured Instructor</h2>
          <h6 className="text-center pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </h6>
          <Carousel>
            {cardChunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {chunk.map((card) => (
                    <Col md={3} className="mb-4" key={card.id}>
                      <Card className="h-100 text-center">
                        <Card.Img
                          variant="top"
                          alt={card.title}
                          src={card.image}
                          className="bg-dark"
                        />
                        <Card.Body className="p-3">
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>{card.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Company Logos */}
      <section className="companyLogo py-5">
        <Container>
          <h6 className="text-center mb-3">Trusted Partners</h6>
          <h2 className="text-center mb-4">
            500+ Leading Universities And Companies
          </h2>
          <Row className="text-center g-4">
            {[
              "/google.svg",
              "/colruyt.svg",
              "/oxford.svg",
              "/dixie.svg",
              "/positech.svg",
              "/spike.svg",
            ].map((logo, index) => (
              <Col xs={6} sm={4} md={2} key={index}>
                <img
                  src={logo}
                  alt={`Company ${index}`}
                  className="img-fluid"
                  style={{ maxHeight: "30px" }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Two Cards Section */}
      <section id="faq" className="py-5">
  <Container>
    <Row>
      {[
        {
          title: "EXAM PREP COURSES",
          heading: "Become An Instructor",
          desc: "Top Instructors from around the World teach millions of students on Mentoring",
          image: "/1.svg",
          bgColor: "#c965608c",
        },
        {
          title: "OFFLINE COURSES",
          heading: "Transform Access To Education",
          desc: "Create an account to receive our newsletter, course recommendations, and promotions",
          image: "/2.svg",
          bgColor: "#e5da158c",
        },
      ].map((card, index) => (
        <Col md={6} className="mb-5" key={index}>
          <Card className="h-100" style={{ backgroundColor: card.bgColor }}>
            <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Title >{card.title}</Card.Title>
              <Card.Subtitle className="mb-2">{card.heading}</Card.Subtitle>
              <Card.Text>{card.desc}</Card.Text>
              <Button variant="light" className="text-dark border">
                Learn More
              </Button>
              </div>
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="img-fluid"
                  style={{ maxWidth: "100px", marginLeft: "20px" }} // Set image width
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* Footer */}
      <footer
        id="contact"
        className="py-4"
        style={{ backgroundColor: "#F0F7FF" }}
      >
        <Container className="footerCols">
          <Row>
            {/* First Column: Logo and Description */}
            <Col className="d-flex flex-column align-items-start py-4" md={3}>
              <img
                src="/logo.svg"
                alt="Company Logo"
                className="mb-3"
                style={{ width: "100px" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consequat mauris Lorem ipsum dolor sit amet.
              </p>
            </Col>

            {/* Second Column: Quick Links */}
            <Col
              className="d-flex flex-column align-items-start gap-3 py-4"
              md={3}
            >
              <h5 className="fw-semibold">Quick Links</h5>
              <ul className="list-unstyled d-flex flex-column fw-medium gap-2">
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Instructors</a>
                </li>
                <li>
                  <a href="#">Placements</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </Col>

            {/* Third Column: For Students */}
            <Col
              className="d-flex flex-column align-items-start gap-3 py-4"
              md={3}
            >
              <h5>For Students</h5>
              <ul className="list-unstyled d-flex flex-column fw-medium gap-2">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Question & Answers</a>
                </li>
                <li>
                  <a href="#">Live Chat</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
              </ul>
            </Col>

            {/* Fourth Column: Contact Us */}
            <Col
              className="d-flex flex-column align-items-start gap-3 py-4"
              md={3}
            >
              <h5>Contact Us</h5>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span className="ms-2">1234 Address St, City, Country</span>
                </li>
                <li>
                  <i className="bi bi-geo"></i>
                  <a href="https://example.com" className="ms-2">
                    example.com
                  </a>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>{" "}
                  <span className="ms-2">a@gmail.com</span>
                </li>
                <li className="d-flex flex-row">
                  <i className="bi bi-phone align-content-center"></i>
                  <span className="d-flex flex-column">
                    <h6 className="ms-2">+123 456 7890</h6>
                    <h6 className="ms-2">+098 765 4321</h6>
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* copyright */}
      <section className="py-4" style={{ backgroundColor: "#F0F7FF" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <a href="#terms" className="text-decoration-none me-3">
                  Terms
                </a>
                <div className="vr" style={{ height: "1.5rem"}}></div>{" "}
                <a href="#privacy" className="text-decoration-none ms-3">
                  Privacy
                </a>
              </div>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="mb-0">
                Copyright © 2024 Surpass Prowess India Pvt. Ltd. All Rights
                Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;
