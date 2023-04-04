import axios from "axios";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import "../App.css";
import Fetch from "./Fetch";
import { useNavigate } from "react-router";
import { FaRupeeSign, FaRegImage, FaPencilAlt } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

// import * as Yup from "yup";

// import moment from "moment-timezone";

// const validationSchema = Yup.object({
//     studentName: Yup.string().required("can't be empty")
// })

export default function TestForm() {
    //useState Hook for modal 

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [dataModal, setDataModal] = useState(false)
    const [initialValues, setInitialValues] = useState({
        photoPath: "",
        studentFee: '',
        joinDate: "",
        studentName: "",
        studentId: "",
        createdIp: "",
    })
    // const formik = useFormik({
    //     validationSchema,
    //     initialValues,
    // })

    //File submittion 
    const handleSubmit = (values) => {
        setIsLoading(true)
        let formData = new FormData();
        Object.keys(values).forEach(key => {
            if (values.isEdit && key === 'photoPath') {
                if (typeof values[key] === 'string') {

                }
                else {
                    formData.append(key, values[key])
                }
            }
            else {
                formData.append(key, values[key])
            }
        })
        //Sending the post call to another computer i,e from one device front-end to other device back-end

        // axios.post("http://localhost:8086/application/registration/savestudent", formData).then(res => {
        //     console.log('dlkdlkfdf  , response    ', res)
        // })
        if (values.isEdit) {
            axios.put("http://172.17.205.108:8086/application/updateStudent/" + values.studentId, formData)
        } else {
            axios.post("http://172.17.205.108:8086/application/saveStudent", formData).then(res => {
                console.log('dlkdlkfdf  , response    ', res)
            })
        }
        setIsLoading(false)

        !values.isEdit && navigate('/home');
        values.isEdit && navigate('/testFormwithformik')

    }

    return (
        <div className="d-flex justify-content-center row">

            <div className="d-flex justify-content-center mb-3 user">
                <h1>User Registration</h1>
            </div>

            <div className="border border-dark App mb-2 grad">

                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values, { resetForm }) => {
                        console.log(' submitted form values------ ', values);
                        handleSubmit(values)
                    }}
                >
                    {({ setFieldValue, handleSubmit, setFieldTouched, values }) => (

                        <form noValidate onSubmit={handleSubmit}>
                            <label className="label" htmlFor="studentName"><FaPencilAlt /> Name</label>
                            <Field className="form-control" name="studentName" placeholder="Enter your name" type="text"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.studentName} 
                            />
                            {/* {formik.touched.studentName && formik.errors.studentName ? (
                                <div className="error">{formik.errors.studentName}</div>
                            ) : null} */}

                            <label className="label" htmlFor="joinDate"><BsCalendarDate /> Joining date</label>
                            <Field className="form-control" name="joinDate" type="date" />

                            <label className="label" htmlFor="studentFee"><FaRupeeSign /> Fees</label>
                            <Field className="form-control" name="studentFee" placeholder="Enter the fees" type="text" />

                            <label className="label" htmlFor="photoPath"><FaRegImage /> Photo</label>
                            <input className="form-control" name="photoPath" type="file"
                                onChange={(e) => {
                                    setFieldValue(e.target.name, e.currentTarget.files[0])
                                    setFieldTouched(e.target.name, true)
                                }} />
                            {/* container for buttons */}
                            {typeof values.photoPath === 'string' ? <p><a href={values.photoPath} target="_blank" rel="noreferrer">{values.photoPath}</a></p> : null}

                            <div className="d-flex flex-row mb-2">
                                {initialValues?.isEdit === true ?
                                    <button className="btn mb-2" type="submit" id="submit" >Edit</button> :
                                    <button className="btn mb-2" type="submit" id="submit" disabled={isLoading}>submit</button>
                                }
                            </div>
                        </form>
                    )}
                </Formik>
                <button className="btn mb-2" onClick={() => { setDataModal(true) }} id="submit">
                    Getdetails
                </button>
                <div className="content">
                    <Fetch setDataModal={setDataModal} dataModal={dataModal} setInitialValues={setInitialValues} initialValues={initialValues} />
                </div>
            </div>
        </div >
    );
}
