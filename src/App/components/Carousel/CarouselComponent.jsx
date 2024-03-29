import Carousel from "react-bootstrap/Carousel";
import godimg from "../../Assets/Images/Carousel_img.png";
// import godimg_2 from "../../Assets/Images/Carousel_img-2.png";
import "./CarouselComponent.css";
function CarouselComponent() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="item" interval={5000}>
        <img
          className="select-disable item-img"
          src={godimg}
          style={{ height: "500px" }}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className="item" interval={5000}>
        <img
          className=" select-disable item-img"
          src={godimg}
          style={{ height: "500px" }}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className="item" interval={5000}>
        <img
          className=" select-disable item-img"
          src={godimg}
          style={{ height: "500px" }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
