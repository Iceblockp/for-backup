import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link} from "react-router-dom"
import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import * as yup from "yup";
import { useSignUpMutation } from "../../store/endpoints/authEndpoint";
import { Loader2 } from "lucide-react"

const SignUpPage = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const [fun ,data] = useSignUpMutation();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name Is Required")
      .min(2, "Name should be longer 2 letter"),

    email: yup
      .string()
      .required("Email Is Required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password Is Required")
      .min(8, "Password should be 8 letter"),
    confirm_password: yup
      .string()
      .required(" password confirm is required")
      .oneOf(
        [yup.ref("password")],
        "Password Confirm should be math with password"
      ),
  });

  const handleSubmit = async (value) => {
    console.log(value);
    await fun(value);
  };

  return (
    <div className="w-3/5 mx-auto  h-full flex justify-center items-center">
      <Card className="basis-2/4 p-5">
        <CardHeader className="flex flex-row justify-between mb-5">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className="text-basic">
            <Link to="/">Already have an account</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={handleSubmit}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <>
                <Form className="flex flex-col gap-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage className=" text-danger text-sm" component={"p"} name="name" />

                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="email"
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="password"
                  />
                  <Label htmlFor="confirm_password">Password Confirm</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.confirm_password}
                    onChange={handleChange}
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                  />
                  <ErrorMessage
                    className=" text-danger text-sm"
                    component={"p"}
                    name="confirm_password"
                  />

                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-basic mt-3"
                  >
                    Sign Up { isSubmitting && (<Loader2 className="mr-2 h-4 w-4 animate-spin" />)}
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
