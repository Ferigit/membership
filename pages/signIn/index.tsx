import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Form, Layout, Button } from "../../src/components";
import { useRouter } from "next/router";
import Link from "next/link";
import { apiInstance } from "../../src/ApiInstance";
import { setAuthorized } from "../../src/store/slices/userSlice";
import { useDispatch, useSelector } from "../../src/store/store";
import { toast } from "../../src/components/ToastProvider";
import useSignInStyleStyle from "./useSignInStyle.style";

const SignIn = () => {
  const classes = useSignInStyleStyle();
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().required("Required").email("Email is not correct"),
    password: yup.string().required("Required"),
  });
  useEffect(() => {
    dispatch(setAuthorized(false));
    return () => {};
  }, []);

  const handleSubmit = async (values: any) => {
    setloading(true);
    const res: any = await apiInstance("POST", "api/login", values);
    if (res.status === 200) {
      toast("success", "Success login", "emptyCompany");
      localStorage.setItem("token", res.data.token);
      dispatch(setAuthorized(res.data));
      router.push("/");
    } else if (res.status === 400) {
      toast("error", res?.data?.error, "emptyCompany");
      setloading(false);
    }
  };

  const formData = [
    {
      name: "email",
      placeholder: "Work Email",
      type: "text",
      grid: { xs: 12 },
      icon: "email",
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      grid: { xs: 12 },
      icon: "lock",
    },
    {
      name: "rules",
      placeholder: "Password",
      label: "I don't want to receive news and offers.",
      type: "checkbox",
      grid: { xs: 12 },
      icon: "lock",
    },
  ];

  return (
    <Layout>
      <div className={classes.formContainer}>
        <p className={classes.formTitle}>Sign In</p>
        <p className={classes.loginWithAccount}>Login with open account</p>
        <div className={classes.authBtns}>
          <Button
            variant="outlined"
            label="Google"
            className={classes.authBtn}
            icon={
              <img
                src="/assets/images/google.png"
                alt="google"
                className={classes.googleBtn}
              />
            }
          />
          <Button
            variant="outlined"
            label="Apple"
            className={classes.authBtn}
            icon={
              <img
                src="/assets/images/apple.png"
                alt="google"
                className={classes.googleBtn}
              />
            }
          />
        </div>
        <Form
          submitLabel="Login"
          formData={formData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          loading={loading}
        />
        <Link href="/signIn/otp">
          <a className={classes.forgetPassword}>forget password</a>
        </Link>
      </div>
    </Layout>
  );
};
export default SignIn;
