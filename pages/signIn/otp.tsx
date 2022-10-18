import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Form, Layout, CountdownTimer, Button } from "../../src/components";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import useSignInStyle from "./useSignInStyle.style";
import { toast } from "../../src/components/ToastProvider";

const OTPForm = () => {
  const classes = useSignInStyle();
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const handleConfrim = () => {
    if (otp.length != 5) {
      toast("error", "Enter code correctly", "");
    } else {
      router.push("/signIn/resetpassword");
    }
  };
  return (
    <Layout>
      <div className={classes.otpFormContainer}>
        <p className={classes.back} onClick={() => router.push("/signIn")}>
          <ArrowBack sx={{ color: "rgb(41,121,252)" }} /> Back
        </p>
        <p className={classes.enterCode}>Enter code</p>
        <p className={classes.caption}>
          Enter the code sent to test@gmail.com email.
        </p>
        <OtpInput
          value={otp}
          onChange={(value: any) => {
            setOtp(value);
          }}
          numInputs={5}
          separator={<span className={classes.seperator}> </span>}
          inputStyle={classes.inputStyle}
          focusStyle
        />
        <CountdownTimer expiresIn={120} />
        <Button label="Confirm" onClick={handleConfrim} />
      </div>
    </Layout>
  );
};
export default OTPForm;
