import React, { useState } from "react";
import "../App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as FormBS } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";

export default function StudentRegistrationForm() {

  const [isLoading, setIsLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (values) => {
    setIsLoading(true)
    //Sending the post call to another computer i,e from one device front-end to other device back-end
    axios.post("http://localhost:8086/application/savestudentform", values).then(res => {
      console.log(' response  ------>  ', res)
    })

    setIsLoading(false)
  }
  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
    { value: "preferNotToSay", label: "prefer not to say" },
  ];

  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        console.log(' submitted form values------ ', values);
        handleSubmit(values)
        setSubmitting(false);
      }}
      initialValues={{
        studentName: "",
        studentFather: "",
        studentDOB: "",
        studentGender: "",
        studentAadhar: "",
        studentMobile: "",
        studentState: "",
        studentDistrict: "",
        studentMandal: "",
        studentVillage: "",
        studentStreet: "",
        studentEmail: "",
        studentPincode: "",
      }}
      validationSchema={Yup.object({
        studentName: Yup.string()
          .min(3, "Must be Atleast 3 characters")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        studentFather: Yup.string()
          .min(3, "Must be Atleast 3 characters")
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        studentGender: Yup.string().nullable()
          .required("Required"),
        studentState: Yup.string()
          .required("Required"),
        studentDistrict: Yup.string()
          .required("Required"),
        studentMandal: Yup.string()
          .required("Required"),
        studentVillage: Yup.string()
          .required("Required"),
        studentStreet: Yup.string()
          .required("Required"),
        studentDOB: Yup.date()
          .required("Required"),
        studentAadhar: Yup.string()
          .min(12, "Must be 12 characters")
          .max(12, "Must be 12 characters")
          .required("Required"),
        studentMobile: Yup.string()
          .min(10, "Must be 10 characters")
          .max(10, "Must be 10 characters")
          .required("Required"),
        studentPincode: Yup.string()
          .min(6, "Must be 6 characters")
          .max(6, "Must be 6 characters")
          .required("Required"),
        studentEmail: Yup.string()
          .email("Invalid email address")
          .required("Required"),
      })}
    >
      {({ isSubmitting, handleSubmit, values, setFieldValue, handleChange }) => (

        <Form noValidate onSubmit={handleSubmit}>

          <div className="d-flex justify-content-center row ">

            <div className="user">
              <h3><center> Student Registration Form </center></h3>
            </div>

            <div className="border border-dark App mb-2 grad">
              <label htmlFor="studentName" className="d-flex justify-content-left mt-2">Student name:</label>
              <Field
                type="text"
                name="studentName"
                placeholder="Enter your name"
                as={FormBS.Control}
              />
              <ErrorMessage className="error" name="studentName" component={FormBS.Text} />
              <label htmlFor="studentFather" className="d-flex justify-content-left mt-2">Father name:</label>
              <Field
                type="text"
                name="studentFather"
                placeholder="Enter your father name"
                as={FormBS.Control}
              />
              <ErrorMessage className="error" name="studentFather" component={FormBS.Text} />
              <label htmlFor="studentDOB" className="d-flex justify-content-left mt-2">Date of birth:</label>
              <Field
                type="date"
                name="studentDOB"
                placeholder="Enter your Date of birth"
                as={FormBS.Control}
              />
              <ErrorMessage className="error" name="studentDOB" component={FormBS.Text} />
              <label className="d-flex justify-content-left">Gender:</label>

              {/* <Select name="studentGender"
                onChange={(e) => {
                  handleChange(e)
                  let value = e.target.value
                  setFieldValue("studentGender", value)

                }}

                options={options}

              /> */}
{/* REACT SELECT */}
              <Select name="studentGender" options={options}
                getOptionValue={option => option?.value}
                getOptionLabel={option => option?.label}
                onChange={(selectedOption) => {
                  // setSelectedOption(selectedOption)
                  // setFieldValue("a", selectedOption)
                  setFieldValue("studentGender", selectedOption?.label)
                }}
              />
              <ErrorMessage className="error" name="studentGender" component={FormBS.Text} />


              {/* <label htmlFor="studentGender" className="d-flex justify-content-left">Gender:</label>
              <select name="studentGender" className="form-control mb-2">
                <option value="gender">Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="Prefer not to answer">
                  Perfer not to Answer
                </option>
                <option value="other">Others</option>
              </select>
              <ErrorMessage className="error" name="studentGender" component={FormBS.Text} /> */}
              <label htmlFor="studentAadhar" className="d-flex justify-content-left mt-2">Aadhar no:</label>
              <Field
                type="text"
                name="studentAadhar"
                placeholder="Enter your Aadhar number"
                as={FormBS.Control}
              />
              <ErrorMessage className="error" name="studentAadhar" component={FormBS.Text} />
              <label htmlFor="studentMobile" className="d-flex justify-content-left mt-2">Mobile no:</label>
              <Field
                type="text"
                name="studentMobile"
                placeholder="Enter your mobile number"
                as={FormBS.Control}
              />
              <ErrorMessage className="error" name="studentMobile" component={FormBS.Text} />
              <label htmlFor="studentEmail" className="d-flex justify-content-left mt-2">Email:</label>
              <Field
                type="email"
                name="studentEmail"
                placeholder="Enter you Email"
                as={FormBS.Control}
              />
              <ErrorMessage className="error" name="studentEmail" component={FormBS.Text} />


              <div className="d-flex justify-content-left mt-3">Address:</div>

              <div className="form-control d-flex flex-row mb-2 border grad">
                <div className="col-6">
                  <label htmlFor="studentState" className="d-flex justify-content-left mt-2" >State:</label>
                  <Field
                    type="text"
                    name="studentState"
                    placeholder="State"
                    as={FormBS.Control}
                  />
                  <ErrorMessage className="error" name="studentState" component={FormBS.Text} />
                  <label htmlFor="studentDistrict" className="d-flex justify-content-left mt-2">District:</label>
                  <Field
                    type="text"
                    name="studentDistrict"
                    placeholder="District"
                    as={FormBS.Control}
                  />
                  <ErrorMessage className="error" name="studentDistrict" component={FormBS.Text} />
                  <label htmlFor="studentMandal" className="d-flex justify-content-left mt-2">Mandal:</label>
                  <Field
                    type="text"
                    name="studentMandal"
                    placeholder="Mandal"
                    as={FormBS.Control}
                  />
                  <ErrorMessage className="error" name="studentMandal" component={FormBS.Text} />

                </div>
                <div className="col-6 mx-2">
                  <label htmlFor="studentVillage" className="d-flex justify-content-left mt-2">Village:</label>
                  <Field
                    type="text"
                    name="studentVillage"
                    placeholder="Village"
                    as={FormBS.Control}
                  />
                  <ErrorMessage className="error" name="studentVillage" component={FormBS.Text} />
                  <label htmlFor="studentStreet" className="d-flex justify-content-left mt-2">Street:</label>
                  <Field
                    type="text"
                    name="studentStreet"
                    placeholder="Street"
                    as={FormBS.Control}
                  />
                  <ErrorMessage className="error" name="studentStreet" component={FormBS.Text} />
                  <label htmlFor="studentPincode" className="d-flex justify-content-left mt-2">pincode:</label>

                  <Field
                    type="text"
                    name="studentPincode"
                    placeholder="Pincode"
                    as={FormBS.Control}
                  />
                  <ErrorMessage className="error" name="studentPincode" component={FormBS.Text} />
                </div>
              </div>
              <Button disabled={isSubmitting} type="submit" id="sumbit" className="btn btn-success">Submit</Button>
              <Button type="reset" >Reset</Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>


  );
};