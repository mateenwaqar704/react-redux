import React from "react";
import { Carousel } from "react-bootstrap";

function Slide(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="slide1">{props.name}</h3>
            <p>{props.p}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg "
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg"
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
    </div>
  );
}

export default Slide;
