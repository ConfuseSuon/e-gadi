import {
  EnvironmentOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Flex, Form, Input, Typography } from "antd";
import { Fragment, useEffect } from "react";

import { handleShowLoginModal } from "../../features/authSlice";
import { useLoginMutation } from "../../services/authAPI";
import { useAppDispatch, useAppSelector } from "../../store";
import CsModal from "../atom/CsModal";

const validateEmail = (_: any, value: string) => {
  if (!value) {
    return Promise.reject("Email is required");
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value)) {
    return Promise.reject("Please, enter a valid email format");
  }
  return Promise.resolve();
};

const Login: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Fragment>
      <CsModal
        title={"LOGIN"}
        form={form}
        children={<LoginForm form={form} />}
      />
    </Fragment>
  );
};

const LoginForm = ({ form }: any) => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmitForm = async (form: any) => {
    await login(form);
    if (accessToken?.length > 0) return dispatch(handleShowLoginModal());
  };
  return (
    <Fragment>
      <Divider />
      <Form
        form={form}
        name={`login-form`}
        layout="vertical"
        onFinish={handleSubmitForm}
        style={{ marginTop: "1rem" }}
      >
        <Form.Item
          name="email"
          rules={[{ validator: validateEmail }]}
          validateTrigger="onBlur"
          style={{ marginTop: ".2rem" }}
        >
          <Input
            type="email"
            size="large"
            placeholder="Your email"
            prefix={<UserOutlined style={{ marginRight: ".4rem" }} />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true }]}
          validateTrigger="onBlur"
          style={{ marginTop: ".4rem" }}
        >
          <Input.Password
            size="large"
            placeholder="Your password"
            prefix={<LockOutlined style={{ marginRight: ".4rem" }} />}
          />
        </Form.Item>

        <Form.Item style={{ margin: "2rem 0 0 0" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            size="large"
            disabled={isLoading}
          >
            {isLoading ? "Signing..." : "Sign in"}
          </Button>
        </Form.Item>
      </Form>
      <Divider type="horizontal">
        <Typography.Text>OR</Typography.Text>{" "}
      </Divider>
      <Flex align="center" vertical gap={20}>
        <Button>Login with Google</Button>
        <div>
          <Typography.Text>
            Don't have an account yet?{" "}
            <Typography.Link>Create your account</Typography.Link>{" "}
          </Typography.Text>
        </div>
      </Flex>
    </Fragment>
  );
};

const RegisterForm = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, []);
  return (
    <Fragment>
      <Divider />
      <Form
        form={form}
        name={`login-form`}
        layout="vertical"
        validateTrigger={"onBlur"}
        style={{ marginTop: "1rem" }}
      >
        <Form.Item name="fullName" rules={[{ required: true }]}>
          <Input
            placeholder="Your fullname"
            size="large"
            prefix={<UserOutlined style={{ marginRight: ".4rem" }} />}
          />
        </Form.Item>
        <Form.Item name="address" rules={[{ required: true }]}>
          <Input
            placeholder="Your address"
            size="large"
            prefix={<EnvironmentOutlined style={{ marginRight: ".4rem" }} />}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ validator: validateEmail }]}
          validateTrigger="onBlur"
          style={{ marginTop: ".4rem" }}
        >
          <Input
            type="email"
            size="large"
            placeholder="Your email"
            prefix={<MailOutlined style={{ marginRight: ".4rem" }} />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true }]}
          validateTrigger="onBlur"
          style={{ marginTop: ".4rem" }}
        >
          <Input.Password
            size="large"
            placeholder="Your password"
            prefix={<LockOutlined style={{ marginRight: ".4rem" }} />}
          />
        </Form.Item>

        <Form.Item style={{ margin: "2rem 0 0 0" }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Divider type="horizontal">
        <Typography.Text>OR</Typography.Text>{" "}
      </Divider>
      <Flex align="center" vertical gap={20}>
        <Button>Login with Google</Button>
        <div>
          <Typography.Text>
            Don't have an account yet?{" "}
            <Typography.Link>Create your account</Typography.Link>{" "}
          </Typography.Text>
        </div>
      </Flex>
    </Fragment>
  );
};

export default Login;
