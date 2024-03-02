import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleBreadCumbs } from "../../../features/globalSlice";
import { useAppDispatch } from "../../../store";
import NewElectricCarForm from "./NewElectricCarForm";

const AddNewElectricCar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(
      handleBreadCumbs([
        { title: "Dashboard" },
        { title: "New Electric Car" },
        { title: "Add" },
      ])
    );
  }, []);
  return (
    <Card title="Add New Electric Car">
      <NewElectricCarForm />
    </Card>
  );
};

export default AddNewElectricCar;
