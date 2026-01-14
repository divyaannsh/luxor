import React, { useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import mail_us from "public/assets/images/aboutpage/mail_us.jpg";
import Image from "next/image";
import ContactUsBanner from "public/assets/images/contact-banner.jpg";
import axios from "axios";

const index = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileNoRef = useRef();
  const companyNameRef = useRef();
  const yourRequirementsRef = useRef();
  const [error, setError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileNoError, setMobileNoError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);
  const [yourRequirementError, setYourRequirementError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const mobileNo = mobileNoRef.current.value;
    const companyName = companyNameRef.current.value;
    const yourRequirement = yourRequirementsRef.current.value;

    const formData = {
      name,
      email,
      contactNumber: mobileNo,
      companyName,
      requirements: yourRequirement,
    };

    console.log("formData-->", formData);

    setError(false);
    setNameError(false);
    setEmailError(false);
    setMobileNoError(false);
    setCompanyNameError(false);
    setYourRequirementError(false);

    if (!name || !email || !mobileNo || !companyName || !yourRequirement) {
      setError("All fields are required!");
    }

    if (!name) {
      setNameError("Name field can't be empty!");
    }

    if (!email) {
      setEmailError("Email field can't be empty!");
    }
    if (!mobileNo) {
      setMobileNoError("Contact Number field can't be empty!");
    }
    if (!companyName) {
      setCompanyNameError("Company name field can't be empty!");
    }
    if (!yourRequirement) {
      setYourRequirementError("Requirement field can't be empty!");
    }

    if (String(mobileNo).length < 10) {
      setMobileNoError("Mobile number should be 10 digits!");
    }

    try {
      const submittedData = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/submit-contact`,
        formData
      );
      nameRef.current.value = "";
      emailRef.current.value = "";
      mobileNoRef.current.value = "";
      companyNameRef.current.value = "";
      yourRequirementsRef.current.value = "";
      alert("Sent Successfully!");
    } catch (err) {
      alert("Failed!");
    }

    // alert("Form Submitted Successfully");
  };

  return (
    <>
      <section>
        <div>
          <Image
            src={ContactUsBanner}
            alt="banner"
            className="w-100 img-fluid"
          />
        </div>
      </section>
      <section className="py-4 py-md-5">
        <div className="container">
          <div className="career-section">
            <div className="career-section-left">
              <div>
                <h1 className="contact-h1">Get in Touch</h1>
                <h6>We will be happy to assist you !</h6>
              </div>
            </div>
            <div className="career-form">
              {/* <hr></hr> */}
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 d-flex justify-content-between gap-4">
                  {/* <span
                    htmlFor=""
                    className="form-label fs-20 text_width fw-700"
                  >
                    Name*
                  </span> */}
                  <div className="d-flex flex-column w-100">
                    <input
                      type="text"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        nameError && "border-danger"
                      }`}
                      id=""
                      placeholder="Your Name"
                      ref={nameRef}
                    />
                    {nameError && (
                      <div>
                        <p className="text-danger mt-2">{nameError}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 d-flex justify-content-between gap-4">
                  {/* <span
                    htmlFor=""
                    className="form-label fs-20 text_width fw-700"
                  >
                    Email*
                  </span> */}
                  <div className="d-flex flex-column w-100">
                    <input
                      type="email"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        emailError && "border-danger"
                      }`}
                      id=""
                      placeholder="Your Email Id"
                      ref={emailRef}
                    />
                    {emailError && (
                      <div>
                        <p className="text-danger mt-2">{emailError}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 d-flex justify-content-between gap-4">
                  {/* <span
                    htmlFor=""
                    className="form-label fs-20 text_width fw-700"
                  >
                    Mobile No*
                  </span> */}
                  <div className="d-flex flex-column w-100">
                    <input
                      type="number"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        mobileNoError && "border-danger"
                      }`}
                      id=""
                      placeholder="Your Contact No"
                      ref={mobileNoRef}
                    />
                    {mobileNoError && (
                      <div>
                        <p className="text-danger mt-2">{mobileNoError}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 d-flex justify-content-between gap-4">
                  {/* <span
                    htmlFor=""
                    className="form-label fs-20 text_width fw-700"
                  >
                    Company Name*
                  </span> */}

                  <div className="d-flex flex-column w-100">
                    <input
                      type="text"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        companyNameError && "border-danger"
                      }`}
                      id=""
                      placeholder="Your Company Name"
                      ref={companyNameRef}
                    />
                    {companyNameError && (
                      <div>
                        <p className="text-danger mt-2">{companyNameError}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 ">
                  {/* <span htmlFor="" className="form-label fs-20 fw-700">
                    Describe your Requirements *
                  </span> */}
                  <div className="d-flex flex-column w-100">
                    <textarea
                      className={`form-control mt-2 rounded-0 ${
                        yourRequirementError && "border-danger"
                      }`}
                      id=""
                      placeholder="Say something!"
                      rows="3"
                      ref={yourRequirementsRef}
                    ></textarea>
                    <div className="d-flex w-100 justify-content-between">
                      {yourRequirementError && (
                        <div>
                          <p className="text-danger mt-2">
                            {yourRequirementError}
                          </p>
                        </div>
                      )}
                      {error && (
                        <div>
                          <p className="text-danger mt-2">{error}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-end mt-3">
                  <button className="btn text-white  btn_submit rounded-0 fs-16 fw-500">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div>
            <iframe
              className="rounded"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.220201174292!2d77.4146083!3d28.538065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8c9aaaaaaab%3A0xf5d2ee4d223e6ebd!2sLuxor%20International%20Private%20Limited!5e0!3m2!1sen!2sin!4v1697965682496!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "450px",
                border: "0",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default index;
