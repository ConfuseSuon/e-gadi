import { Button, Modal } from "antd";
import React, { useState } from "react";
import { handleShowLoginModal } from "../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../store";

interface ICsModalProps {
  title: string;
  children: React.ReactNode;
  form: any;
}

const CsModal: React.FC<ICsModalProps> = ({ title, children, form }) => {
  const [loading, setLoading] = useState(false);

  const { showLoginModal } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(handleShowLoginModal());
    }, 3000);
  };

  const handleCancel = () => {
    dispatch(handleShowLoginModal());
  };

  return (
    <>
      <Modal
        open={showLoginModal}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        afterClose={() => form.resetFields()}
        // footer={[
        //   <Button key="back" onClick={handleCancel}>
        //     Return
        //   </Button>,
        //   <Button
        //     key="submit"
        //     type="primary"
        //     loading={loading}
        //     onClick={handleOk}
        //   >
        //     Submit
        //   </Button>,
        //   <Button
        //     key="link"
        //     href="https://google.com"
        //     type="primary"
        //     loading={loading}
        //     onClick={handleOk}
        //   >
        //     Search on Google
        //   </Button>,
        // ]}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default CsModal;
