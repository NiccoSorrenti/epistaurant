import { Container, Row, Col, Carousel } from 'react-bootstrap';
import pastasciutte from '../data/menu.json';

const Home = function () {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        {/* <Col className="col col-12 col-md-8 col-lg-4"> */}
        <Col xs={12} md={8} lg={6}>
          {/* il valore di una prop va tra " " se è una stringa, o
        tra { } se è qualsiasi valore NON stringa */}
          <Carousel>
            {pastasciutte.map((pasta) => {
              return (
                <Carousel.Item key={pasta.id}>
                  <img src={pasta.image} className="w-100" />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
