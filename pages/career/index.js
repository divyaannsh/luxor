import React, { useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import mail_us from "public/assets/images/aboutpage/mail_us.jpg";
import Image from "next/image";
import CareerBanner from "public/assets/images/career.jpg";
import axios from "axios";
import { BASE_URL } from "@utils/api";

const index = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileNoRef = useRef();
  const profileRef = useRef();
  const inputFileRef = useRef();
  const [file, setFile] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileNoError, setMobileNoError] = useState(false);
  const [profileError, setProfileError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const contact = mobileNoRef.current.value;
    const profile = profileRef.current.value;

    if (!name) {
      setNameError("Name is required!");
    }

    if (!email) {
      setEmailError("Email is required!");
    }

    if (!contact) {
      setMobileNoError("Contact is required!");
    }

    if (!profile) {
      setProfileError("Profile is required!");
    }

    if (!name && !email && !contact && !profile) {
      alert("failed");
      return;
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("profile", profile);
    formData.append("file", file);

    try {
      // const submittedData = await axios.post(
      //   `${process.env.NEXT_PUBLIC_BASE_URL}/submit-contact`,
      //   formData
      // );
      const submittedData = await axios.post(
        `${BASE_URL}/v2/send-career`,
        formData
      );
      nameRef.current.value = "";
      emailRef.current.value = "";
      mobileNoRef.current.value = "";
      profileRef.current.value = "";
      setNameError(false);
      setEmailError(false);
      setMobileNoError(false);
      setProfileError(false);
      alert("Sent Successfully!");
    } catch (err) {
      console.log("failed");
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <>
      <section>
        <div>
          <Image src={CareerBanner} alt="banner" className="w-100 img-fluid" />
        </div>
      </section>
      <section className="py-4 py-md-5 career-container">
        <div className="container">
          <div className="career-section">
            <div className="career-section-left">
              <div>
                <h1>Join Our Team</h1>
                <h6>Join Our Innovative Team</h6>
              </div>
            </div>
            <div className="career-form">
              {/* <hr></hr> */}
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 d-flex justify-content-between gap-4">
                  <div className="d-flex flex-column w-100">
                    <input
                      type="text"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        nameError && "border-danger"
                      }`}
                      id=""
                      placeholder="Name"
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
                  <div className="d-flex flex-column w-100">
                    <input
                      type="email"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        emailError && "border-danger"
                      }`}
                      id=""
                      placeholder="Email"
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
                  <div className="d-flex flex-column w-100">
                    <input
                      type="number"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        mobileNoError && "border-danger"
                      }`}
                      id=""
                      placeholder="Contact Number"
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
                  <div className="d-flex flex-column w-100">
                    <input
                      type="text"
                      className={`form-control rounded-0 shadow-none fs-14 input_field ${
                        profileError && "border-danger"
                      }`}
                      id=""
                      placeholder="Profile"
                      ref={profileRef}
                    />
                    {profileError && (
                      <div>
                        <p className="text-danger mt-2">{profileError}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3 d-flex justify-content-between gap-4">
                  <div className="d-flex flex-column w-100">
                    <button
                      type="button"
                      onClick={() => inputFileRef.current.click()}
                      className={`form-control rounded-0 shadow-none fs-14 input_field`}
                      style={{ backgroundColor: "#d3d3d3" }}
                    >
                      Upload Resume
                    </button>
                    <input
                      type="file"
                      onChange={handleChange}
                      // className={`form-control rounded-0 shadow-none fs-14 input_field ${
                      //   companyNameError && "border-danger"
                      // }`}
                      style={{ display: "none" }}
                      id=""
                      placeholder="Upload Resume"
                      ref={inputFileRef}
                    />
                  </div>
                </div>

                <div className="text-end mt-3">
                  <button
                    className="btn text-white  btn_submit rounded-0 fs-16 fw-500"
                    type="submit"
                  >
                    Go Ahead
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default index;
