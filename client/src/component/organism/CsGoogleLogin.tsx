import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { useLoginWithGoogleMutation } from "../../services/authAPI";

const CsGoogleLogin = () => {
  const [loginWithGoogle] = useLoginWithGoogleMutation();

  return (
    <>
      <GoogleLogin
        width={100}
        onSuccess={(credentialResponse) => {
          const body = { accessToken: credentialResponse?.credential };
          loginWithGoogle(body);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        text={"continue_with"}
        useOneTap
      />
    </>
  );
};

export default CsGoogleLogin;
