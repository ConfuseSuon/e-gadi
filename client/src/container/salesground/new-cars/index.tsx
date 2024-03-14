import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Col, Flex, Grid, Row } from "antd";

import { Fragment } from "react";

import firstCarousel from "../../../assets/carousel/futuristic-concept-art-electric-car-station.jpg";
import CsCarCard from "../../../component/atom/CsCarCard";
import CsDivider from "../../../component/atom/Divider";

const NewCars = () => {
  const screen = Grid.useBreakpoint();
  console.log(screen, "hello");
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
        <Col md={{ span: 19 }} xs={{ span: 23 }}>
          <Carousel
            arrows
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
          >
            <div style={{ marginBottom: "4rem" }}>
              <Flex justify="space-between" wrap="wrap" gap={"large"}>
                <CsCarCard />
                <CsCarCard />
                <CsCarCard />
                <CsCarCard />
                <CsCarCard />
                <CsCarCard />
              </Flex>
            </div>
            <div>
              <Flex justify="space-between">
                <CsCarCard />
                <CsCarCard />
              </Flex>
            </div>
          </Carousel>
        </Col>
      </Row>
    </Fragment>
  );
};

export default NewCars;
