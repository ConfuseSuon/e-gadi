import {
  CopyOutlined,
  FacebookOutlined,
  InstagramOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import {
  Alert,
  Button,
  Col,
  Flex,
  Grid,
  Image,
  List,
  Row,
  Spin,
  Tag,
  Tooltip,
  Typography,
} from "antd";

import { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import CsDivider from "../../../component/atom/Divider";
import { useGetSalesgroundNewCarByIdQuery } from "../../../services/salesgroundAPI";
import { generateRandomColor } from "../../../utils/help";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "magenta",
  "teal",
];

const NewCarById = () => {
  const { id } = useParams();
  const screen = Grid.useBreakpoint();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: newCarData, isLoading } = useGetSalesgroundNewCarByIdQuery(
    id as string
  );

  if (isLoading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        <Spin spinning={true} />
      </div>
    );
  if (!id || !newCarData) return <Navigate to={"/"} />;

  return (
    <Fragment>
      <Row justify={"center"} style={{ marginTop: "1rem" }}>
        <Col span={14}>
          <Row>
            <Col span={24}>
              <CsDivider title="Details" dividerSize={5} />
            </Col>
            <Col span={24} style={{ marginTop: "2rem", background: "none" }}>
              <Flex
                justify="space-between"
                wrap="wrap"
                align="center"
                gap={"large"}
              >
                {/* Information */}
                <Flex vertical style={{ width: "25rem" }}>
                  <Typography.Text
                    copyable={{
                      icon: [
                        <CopyOutlined
                          key="copy-icon"
                          style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                        />,
                        <SmileOutlined
                          key="copied-icon"
                          style={{ fontSize: "1.3rem", marginLeft: "1rem" }}
                        />,
                      ],
                      tooltips: ["Copy", "Copied!!"],
                    }}
                    style={{ fontSize: "2rem", fontWeight: "600" }}
                  >
                    {newCarData?.carBrand} {newCarData?.carModel}
                  </Typography.Text>
                  <Typography.Text>{newCarData?.ownership}</Typography.Text>
                  <Flex
                    style={{
                      background: "white",
                      padding: ".8rem",
                      borderRadius: "7px",
                      marginTop: "2rem",
                    }}
                    vertical
                  >
                    <Flex>
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#fc8e3c",
                        }}
                      >
                        Basic Information
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Price{" "}
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        Rs. {newCarData?.price?.toLocaleString()}
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Body Styles
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {newCarData?.bodyStyles}
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Seating Capacity
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {newCarData?.seatingCapacity} adult
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Made Year
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {newCarData?.madeYear}
                      </Typography.Text>
                    </Flex>
                    <Flex>
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#fc8e3c",
                          marginTop: ".8rem",
                        }}
                      >
                        Features
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Range
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {newCarData?.range} miles
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Top Speed
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {newCarData?.topSpeed} mph
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Chargin 0 to 100
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                        }}
                      >
                        {newCarData?.charging_0_to_100} hr
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Battery Capacity
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                        }}
                      >
                        {newCarData?.batteryCapacity} kWh
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Ground Clearance
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                        }}
                      >
                        {newCarData?.groundClearance} inch
                      </Typography.Text>
                    </Flex>
                    <Flex>
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#fc8e3c",
                          marginTop: ".8rem",
                        }}
                      >
                        Extra Features
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="flex-start"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                      wrap="wrap"
                    >
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {newCarData?.extraFeatures}
                      </Typography.Text>
                    </Flex>
                  </Flex>
                </Flex>

                <Image.PreviewGroup items={newCarData?.imageURL}>
                  <Image
                    style={{
                      objectFit: "cover",
                      height: 280,
                      width: screen?.xs ? 220 : 400,
                      borderRadius: "7px",
                    }}
                    src={newCarData?.imageURL[0]}
                  />
                </Image.PreviewGroup>
              </Flex>
            </Col>
            <Col
              span={24}
              style={{
                marginTop: "5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={() => navigate(-1)}> Back </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default NewCarById;
