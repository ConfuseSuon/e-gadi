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
  Row,
  Spin,
  Tooltip,
  Typography,
} from "antd";

import { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import CsDivider from "../../../component/atom/Divider";
import { useGetSalesgroundUsedCarByIdQuery } from "../../../services/salesgroundAPI";
import { useAppSelector } from "../../../store";

const UsedCarById = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const screen = Grid.useBreakpoint();
  const [customLoading, setCustomLoading] = useState(true);

  const { loggedInUser } = useAppSelector((state) => state.auth);
  const { data: usedCarData, isLoading } = useGetSalesgroundUsedCarByIdQuery(
    id as string
  );

  useEffect(() => {
    setTimeout(() => setCustomLoading(false), 600);
  }, []);

  if (isLoading || customLoading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        <Spin spinning={true} />
      </div>
    );
  if (!id || !usedCarData) return <Navigate to={"/"} />;

  return (
    <Fragment>
      {!loggedInUser ? (
        <Alert
          message="In order to view compelete contact details, you have to login!"
          banner
          closable
        />
      ) : null}
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
                    {usedCarData?.carBrand} {usedCarData?.carModel}
                  </Typography.Text>
                  <Typography.Text>{usedCarData?.ownership}</Typography.Text>
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
                        Car Information
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
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
                        Rs. {usedCarData?.price?.toLocaleString()}
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Driven
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {usedCarData?.kmsDriven?.toLocaleString()} miles
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
                        Seller Information
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Name
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        Mr. {usedCarData?.sellerName}
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Address
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                          color: "black",
                        }}
                      >
                        {usedCarData?.address}
                      </Typography.Text>
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="center"
                      style={{ marginTop: ".5rem" }}
                    >
                      <Typography.Text
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Contact
                      </Typography.Text>
                      <Typography.Text
                        style={{
                          fontSize: ".9rem",
                          fontWeight: "400",
                        }}
                      >
                        {loggedInUser ? usedCarData?.contactNumber : "?"}
                      </Typography.Text>
                    </Flex>
                    <Flex align="center" justify="center" gap={"middle"}>
                      <Tooltip title="Seller Profile">
                        <Typography.Link
                          onClick={() =>
                            (window.location.href =
                              usedCarData?.socialMedia[0]?.facebook)
                          }
                          disabled={!loggedInUser ? true : false}
                          target="_parent"
                        >
                          <FacebookOutlined
                            style={{ color: "blue", fontSize: "1rem" }}
                          />
                        </Typography.Link>
                      </Tooltip>
                      <Tooltip title="Seller Profile">
                        <Typography.Link
                          href="https://ant.design"
                          target="_blank"
                          disabled={!loggedInUser ? true : false}
                        >
                          <InstagramOutlined
                            style={{ color: "red", fontSize: "1rem" }}
                          />
                        </Typography.Link>
                      </Tooltip>
                    </Flex>
                  </Flex>
                </Flex>

                <Image.PreviewGroup items={usedCarData?.imageURL}>
                  <Image
                    style={{
                      objectFit: "cover",
                      height: 210,
                      width: screen?.xs ? 245 : 300,
                      borderRadius: "7px",
                    }}
                    src={usedCarData?.imageURL[0]}
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

export default UsedCarById;
