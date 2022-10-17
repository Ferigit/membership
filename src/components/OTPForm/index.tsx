import * as React from "react";
import OtpInput from "react-otp-input";

const OTPForm = () => {
  return (
    <OtpInput
      value={"2"}
      onChange={() => {}}
      numInputs={6}
      separator={<span>-</span>}
      inputStyle={{ width: 50, height: 50 }}
      focusStyle
    />
  );
};
export default OTPForm;
