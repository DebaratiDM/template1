import Carousel from "react-bootstrap/Carousel";
import Image1 from "../Images/1.jpg";
import Image2 from "../Images/2.jpg";
import Image3 from "../Images/3.jpg";

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 700, width: 1950 }}
          src={Image3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 700, width: 1950 }}
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ height: 700, width: 1950 }}
          src={Image1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
