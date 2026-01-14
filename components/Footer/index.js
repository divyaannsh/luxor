import React from "react";
import Link from "next/link";
function index() {
  return (
    <React.Fragment>
      <section className="footer_bg pt-5">
        <div className="container">
          <div className="footer-links-column">
            <div>
              <h3 className="fs-20 text-white mb-4">Products</h3>
              <ul className="text-white">
                <div className="d-flex justify-content-lg-between">
                  <div>
                    {/* <li className="mb-2 d-block fs-14 ">
                      <a
                        href={"/listing/PCW/653917908eef3ad8ecb0d295"}
                        style={{ color: "white" }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>PCW
                      </a>
                    </li> */}
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/pens/6539114d1d035f1f14e54c9c"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Pens
                      </a>
                    </li>
                    <li className="mb-2 d-block fs-14">
                      <a
                        href="/listing/Highlighters/653911ba8e6902ca42c1d6e9"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Highlighters
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                    <a
                        href="#"
                        style={{
                          color: "white",
                        }}
                        >
                      <i class="fa-solid fa-play me-2 fs-10"></i>Display Pack
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/Notebook%20and%20Stationery/653911fdeb3253e94826bcac"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Notebooks &
                        Stationery
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="listing/markers/653912250252d0fe24b4346c"
                        style={{ color: "white" }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Markers
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/Art%20&%20Hobby/653911ce6d8ae7473f9325a7"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Art & Hobby
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/Sustainable/653911eb04804c4985fe52bb"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Sustainable
                      </a>
                    </li>
                    <li className="mb-2  d-block fs-14">
                      <a
                        href="/listing/Value%20Packs/6539120edb6bdba29040cb2c"
                        style={{
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-play me-2 fs-10"></i>Value Packs
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <h3 className="fs-20 text-white mb-4">Explore</h3>

              <ul className="text-white ">
                <li className="mb-2 d-block fs-14">
                  {" "}
                  <a href="/overview" className="text-white">
                    <i class="fa-solid fa-play me-2 fs-10"></i>Overview
                  </a>
                </li>
                <li className="mb-2 d-block fs-14">
                  <a href="/career" className="text-white">
                    <i class="fa-solid fa-play me-2 fs-10"></i>Career
                  </a>
                </li>
                <li className="mb-2 d-block fs-14">
                <a href="/media" className="text-white">
                  <i class="fa-solid fa-play me-2 fs-10"></i>News & Media
                  </a>
                </li>
                <li className="mb-2 d-block fs-14">
                  <a
                    href="#Partners"
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    <i class="fa-solid fa-play me-2 fs-10"></i>
                    Partners/Resellers
                  </a>
                </li>
              </ul>
            </div>
            <div>
            <h3 className="fs-20 text-white mb-4">Information & Policies</h3>
              <ul className="mb-2 d-block fs-14">
                <a
                  href={"/privacy"}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  <li className="mb-3 d-block fs-14">
                    <i class="fa-solid fa-play me-2"></i>Privacy Policy
                  </li>
                </a>

                <li className="mb-3 d-block fs-14">
                  <a href={"/privacy"} style={{ cursor: "pointer", color: "white" }}>
                    <i class="fa-solid fa-play me-2"></i>Cookie Policy
                  </a>
                </li>

                {/* <li className="mb-3 d-block fs-14">
                <a
                  href={"/privacy"}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  <i class="fa-solid fa-play me-2"></i>Terms & Conditions
                  </a>
                </li> */}
                <li className="mb-3 d-block fs-14">
                  <a href="#award" style={{ cursor: "pointer", color: "white" }}>
                    <i class="fa-solid fa-play me-2"></i>Awards & Certification
                  </a>
                </li>

                <li className="mb-3 d-block fs-14">
                  <a
                    href={"/privacy"}
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    <i class="fa-solid fa-play me-2"></i>Terms & Conditions
                  </a>
                </li>
                <li className="mb-3 d-block fs-14">
                  <a
                    href="#award"
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    <i class="fa-solid fa-play me-2"></i>Awards & Certification
                  </a>
                </li>

                <li className="mb-3 d-block fs-14">
                  <a
                    href={"/contact"}
                    style={{ cursor: "pointer", color: "white" }}
                  >
                    <i class="fa-solid fa-play me-2"></i>Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
            <h3 className="fs-20 text-white mb-4">Corporate Information</h3> 
              <ul className="text-white ">
                <li className="d-block fs-14">
                  <i class="fa-solid fa-envelope me-2 mb-3 fs-14 "></i>
                  <a
                    className="text-white"
                    href="mailto:export.enquiry@luxoroffice.com"
                  >
                    export.enquiry@luxoroffice.com
                  </a>
                </li>
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-phone me-2"></i>0120-4899000
                </li>
                <li className="mb-3 d-block fs-14">
                  <i class="fa-solid fa-location-dot me-2"></i>
                  C-42, Phase-II, Noida, District - Gautam Budh Nagar,<br /> Uttar
                  Pradesh - 201305<br />
                  Phone: +91-120-4197000-03<br />
                  Email: export.enquiry@luxoroffice.com
                </li>

                <li>
                  <a
                    href=" https://www.facebook.com/luxorpenofficial/"
                    style={{ color: "#fff" }}
                    target="_blank"
                  >
                    <i class="fa-brands fa-square-facebook fs-24 me-2"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/luxorpenofficial//"
                    style={{ color: "#fff" }}
                    target="_blank"
                  >
                    {" "}
                    <i class="fa-brands fa-instagram fs-24 me-2"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/luxorpen/"
                    style={{ color: "#fff" }}
                    target="_blank"
                  >
                    {" "}
                    <i class="fa-brands fs-26 fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <h3 className="text-white fs-16 text-center">
              Copyright Luxor {new Date().getFullYear()} | All Rights Reserved
            </h3>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default index;
