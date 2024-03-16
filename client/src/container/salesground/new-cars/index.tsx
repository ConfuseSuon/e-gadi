import { Col, Flex, Grid, Row } from "antd";

import { Fragment } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import firstCarousel from "../../../assets/carousel/futuristic-concept-art-electric-car-station.jpg";
import CsCarCard from "../../../component/atom/CsCarCard";
import CsDivider from "../../../component/atom/Divider";
import { useGetSalesgroundNewCarsQuery } from "../../../services/salesgroundAPI";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const NewCars = () => {
  const screen = Grid.useBreakpoint();
  const { data } = useGetSalesgroundNewCarsQuery();

  return (
    <Fragment>
      {/* Seciton 1 */}
      <Row justify={"center"}>
        <Col span={24} style={{ background: "black" }}>
          <img
            src={firstCarousel}
            style={{
              width: "100%",
              height: "20rem",
              objectFit: "cover",
              opacity: ".9",
            }}
          />
        </Col>
      </Row>

      {/* Section 2 */}
      <Row align={"middle"} justify={"center"}>
        <Col span={20}>
          <CsDivider title="New Cars" dividerSize={5} />
        </Col>{" "}
        <Col span={20}>
          {data ? (
            <Carousel
              responsive={responsive}
              autoPlaySpeed={4000}
              showDots={true}
              autoPlay={true}
              infinite={true}
            >
              {data?.map((car: any) => {
                return (
                  <div style={{ padding: "2rem" }} key={car?._id}>
                    <CsCarCard
                      imageURL={car?.imageURL[0]}
                      title={`${car?.carBrand} ${car?.carModel}`}
                      description={car?.description}
                      price={car?.price}
                      slug={car?._id}
                      reqBy="new-cars"
                      styleBy="responsive"
                    />
                  </div>
                );
              })}
            </Carousel>
          ) : null}
        </Col>
      </Row>
    </Fragment>
  );
};

export default NewCars;
