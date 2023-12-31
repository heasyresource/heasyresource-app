"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Box,
  Burger,
  Container,
  Drawer,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import "../styles/landing.css";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "#pricing", label: "Pricing" },
  { link: "#about-us", label: "About Us" },
  { link: "#contact", label: "Contact" },
  {
    link: "/signup",
    label: "Sign Up",
    bg: "#3377ff",
    borderRd: "6px",
    textColor: "#ffff",
    hoverClass: "hoverBg",
    padding: "12px 30px",
  },
];

export default function HomePage() {
  const [opened, { open, close }] = useDisclosure(false);
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={`px-[12px] py-[8px] ${link.hoverClass}`}
      style={{
        textDecoration: "none",
        color: link.textColor ? link.textColor : "#A3A3A3",
        padding: "8px 12px",
        fontSize: "15px",
        backgroundColor: link.bg,
        borderRadius: link.borderRd,
        padding: link.padding,
      }}
    >
      {link.label}
    </Link>
  ));
  return (
    <>
      <Drawer opened={opened} onClose={close}>
        <Stack justify="center" align="center">
          {items}
        </Stack>
      </Drawer>
      <header
        className="header"
        style={{ backgroundColor: "#fff", borderBottom: "1px solid #A3A3A3" }}
      >
        <Container
          size="xl"
          className="h-full flex justify-between items-center"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <a href="/">
            <Image
              src={"/assets/svgs/HRlogo.svg"}
              style={{ width: "12rem" }}
              alt="heasyresource-logo"
            />
          </a>
          <Group gap={15} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={open} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <main>
        {/* <!-- ===================== HOME SECTION ========= --> */}
        <section className="home">
          <Container
            className="app_container"
            size={"xl"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              gap: "60px",
            }}
          >
            <div className="home_data">
              <div className="home_caption">
                <h1 className="home_title">
                  <span>Streamline</span> Your <span>Workplace </span> Dynamics
                  with Heasy Resource HR
                </h1>
                <p className="home_description">
                  Empower efficiency, foster growth, and create a dynamic
                  workplace through our innovative HR management solution.
                  Unlock the true potential of your workforce with Heasy
                  Resource.
                </p>
                <div className="home_btn">
                  <Link href="/signup" className="btn">
                    Get Started
                  </Link>
                  <a href="#contact" className="btn btn_outline">
                    Let&apos;s Talk<i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div style={{ flex: ".5", width: "50%" }} className="hero-img">
              <Image
                src="/assets/images/home.png"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </Container>
        </section>

        {/* <!-- ===================== TRUSTED_ORG SECTION ========= --> */}
        <Container size={"xl"}>
          <Box py={"100px"}>
            <h3 className="trust_title">
              We are Trusted by <span>4,000+</span> Organizations
            </h3>
            <div className="trust_brand">
              <Image
                src="/assets/images/log_1.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_2.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_4.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_9.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_6.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_3.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_8.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_5.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_10.png"
                alt=""
                className="trust_brand_img"
              />
              <Image
                src="/assets/images/log_7.png"
                alt=""
                className="trust_brand_img"
              />
            </div>
          </Box>
        </Container>

        {/* <!-- ===================== PROGRESS SECTION ========= --> */}
        <section className="progress section">
          <Container
            size={"xl"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              flexDirection: "column",
            }}
          >
            <Image
              src="/assets/images/progress.png"
              alt=""
              className="progress_img"
            />
            <h2 className="progress_title">
              <span>Seamlessly</span> guide your <span>team&apos;s growth</span>{" "}
              with Heasy Resource HR, where progress management integrates for
              optimal HR efficiency.
            </h2>
          </Container>
        </section>

        {/* <!-- ===================== WHY US SECTION ========= --> */}
        <section className="whyus section" id="about-us">
          <Container size={"xl"}>
            <div className="section_header">
              <div className="section_title_wrapper">
                <h4 className="section_head">why us</h4>
                <h2 className="section_title">The Reason We Lead in HR</h2>
                <p className="section_description">
                  With long experience and deep expertise, we have helped
                  businesses reach their full potential by optimizing key
                  aspects of HR management
                </p>
              </div>
              <Image
                src="/assets/images/Vector_Dots.png"
                alt=""
                className="section_header_image"
              />
            </div>
            <div className="service_container">
              <div className="service_card">
                <h1 className="card_number">01</h1>
                <div className="service_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-shield-checkered-filled"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M11.013 12v9.754a13 13 0 0 1 -8.733 -9.754h8.734zm9.284 3.794a13 13 0 0 1 -7.283 5.951l-.001 -9.745h8.708a12.96 12.96 0 0 1 -1.424 3.794zm-9.283 -13.268l-.001 7.474h-8.986c-.068 -1.432 .101 -2.88 .514 -4.282a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.192 -2.256l.276 -.219zm1.999 7.474v-7.453l-.09 -.073a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717c.413 1.403 .582 2.85 .514 4.282h-8.96z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="service_card_title">Data Security First</h3>
                <hp className="service_card_description">
                  We take data security seriously. Your sensitive HR information
                  is protected with strong encryption and advanced security
                  protocols, ensuring maximum confidentiality.
                </hp>
              </div>
              <div className="service_card">
                <h1 className="card_number">02</h1>
                <div className="service_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bulb-filled"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                    <path
                      d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                    <path
                      d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                    <path
                      d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                    <path
                      d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                    <path
                      d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                    <path
                      d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z"
                      strokeWidth="0"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="service_card_title">Skills That Matter</h3>
                <hp className="service_card_description">
                  With years of experience in HR management, we understand the
                  ins and outs of workforce dynamics, enabling us to provide
                  customized solutions that align with your business goals.
                </hp>
              </div>
              <div className="service_card">
                <h1 className="card_number">03</h1>
                <div className="service_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-timeline"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 16l6 -7l5 5l5 -6" />
                    <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </div>
                <h3 className="service_card_title">Ensure Compliance</h3>
                <hp className="service_card_description">
                  Our platform automates a plethora of compliance tasks and
                  government filings on your behalf. With our integrated
                  safeguards, the risk of inadvertent error is minimized.
                </hp>
              </div>
            </div>
          </Container>
        </section>

        {/* <!-- ===================== PAYROLL SECTION ========= --> */}
        <section className="payroll section">
          <Container size={"xl"}>
            <div className="section_header section_header_right">
              <Image
                src="/assets/images/Vector_Dots.png"
                alt=""
                className="section_header_image"
              />
              <div className="section_title_wrapper">
                <h4 className="section_head_right">payroll</h4>
                <h2 className="section_title">
                  Simplifying your employee payout process is faster and easier
                  than ever.
                </h2>
              </div>
            </div>
            <Image
              src="/assets/images/payroll_image.png"
              alt=""
              className="payroll_img"
            />
          </Container>
        </section>

        {/* <!-- ===================== PRICING SECTION ========= --> */}
        <section className="pricing section" id="pricing">
          <Container size={"xl"}>
            <div className="section_header">
              <div className="section_title_wrapper">
                <h4 className="section_head">Pricing</h4>
                <h2 className="section_title">
                  Select and Build The Talent Suite for Your Strategy.
                </h2>
              </div>
              <Image
                src="/assets/images/Vector_Dots.png"
                alt=""
                className="section_header_image"
              />
            </div>

            <Grid>
              <GridCol span={{ lg: 3, md: 4, sm: 12 }}>
                <div className="price_card">
                  <h4 className="price_type">Small</h4>
                  <h3 className="price">
                    $19<span>/Year</span>
                  </h3>
                  <p className="price_description">Features</p>
                  <p className="price_attribute">
                    <span></span> Employee Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Payroll
                  </p>
                  <p className="price_attribute">
                    <span></span> Leave Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Hiring
                  </p>
                  <p className="price_attribute">
                    <span></span> Analytics
                  </p>
                  <a href="/signup" className="btn price_button">
                    Get Started
                  </a>
                </div>
              </GridCol>
              <GridCol span={{ lg: 3, md: 4, sm: 12 }}>
                <div className="price_card">
                  <h4 className="price_type">Medium</h4>
                  <h3 className="price">
                    $39<span>/Year</span>
                  </h3>
                  <p className="price_description">Features</p>
                  <p className="price_attribute">
                    <span></span>Employee Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Payroll
                  </p>
                  <p className="price_attribute">
                    <span></span> Leave Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Hiring
                  </p>
                  <p className="price_attribute">
                    <span></span> Analytics
                  </p>
                  <a href="/signup" className="btn price_button">
                    Get Started
                  </a>
                </div>
              </GridCol>
              <GridCol span={{ lg: 3, md: 4, sm: 12 }}>
                <div className="price_card">
                  <h4 className="price_type">Large</h4>
                  <h3 className="price">
                    $99<span>/Year</span>
                  </h3>
                  <p className="price_description">Features</p>
                  <p className="price_attribute">
                    <span></span> Employee Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Payroll
                  </p>
                  <p className="price_attribute">
                    <span></span> Leave Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Hiring
                  </p>
                  <p className="price_attribute">
                    <span></span> Analytics
                  </p>
                  <a href="/signup" className="btn price_button">
                    Get Started
                  </a>
                </div>
              </GridCol>
              <GridCol span={{ lg: 3, md: 4, sm: 12 }}>
                <div className="price_card">
                  <h4 className="price_type">Giant</h4>
                  <h3 className="price">
                    $199<span>/Year</span>
                  </h3>
                  <p className="price_description">Features</p>
                  <p className="price_attribute">
                    <span></span> Employee Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Payroll
                  </p>
                  <p className="price_attribute">
                    <span></span> Leave Management
                  </p>
                  <p className="price_attribute">
                    <span></span> Hiring
                  </p>
                  <p className="price_attribute">
                    <span></span> Analytics
                  </p>
                  <a href="/signup" className="btn price_button">
                    Get Started
                  </a>
                </div>
              </GridCol>
            </Grid>
          </Container>
        </section>

        {/* <!-- ===================== TESTIMONIAL SECTION ========= --> */}
        <section className="testimonial section">
          <div className="container">
            <div className="section_header section_header_right">
              <Image
                src="/assets/images/Vector_Dots.png"
                alt=""
                className="section_header_image"
              />
              <div className="section_title_wrapper">
                <h4 className="section_head_right">Testimonials</h4>
                <h2 className="section_title">
                  Hear from Our Clients About Heasy Resource Platform
                </h2>
              </div>
            </div>
            <Swiper
              spaceBetween={"50px"}
              slidesPerView={"auto"}
              draggable={true}
              loop
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial_card">
                    <p className="testimony">
                      I&apos;ve been with Heasy Resource for over five years
                      now, and I can genuinely say that the HR department is
                      second to none. From the moment I joined, I felt welcomed,
                      supported, and valued.
                    </p>
                    <div className="testifier">
                      <div className="testifier_image">
                        <Image src="/assets/images/test.png" alt="" />
                      </div>
                      <h3 className="testifier_info">
                        Abijuwon Faruk
                        <br />
                        <span>C.E.O Stack Overflow</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial_card">
                    <p className="testimony">
                      In my five years with Heasy Resource, the HR department
                      stands out as exceptional. Since day one, I&apos;ve felt a
                      warm welcome, continuous support, and undeniable value in
                      being part of this organization.
                    </p>
                    <div className="testifier">
                      <div className="testifier_image">
                        <Image src="/assets/images/test2.jpg" alt="" />
                      </div>
                      <h3 className="testifier_info">
                        Kent Jones
                        <br />
                        <span>C.E.O Cocacola</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial_card">
                    <p className="testimony">
                      Heasy Resource&apos;s HR department is truly unparalleled.
                      Throughout my five-year journey, I&apos;ve experienced a
                      sense of belonging, unwavering support, and a genuine
                      feeling of being valued from the very beginning.
                    </p>
                    <div className="testifier">
                      <div className="testifier_image">
                        <Image src="/assets/images/test3.jpg" alt="" />
                      </div>
                      <h3 className="testifier_info">
                        Sheldon Cooper
                        <br />
                        <span>C.E.O Google </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial_card">
                    <p className="testimony">
                      Having been a part of Heasy Resource for over five years,
                      I can confidently attest to the unmatched excellence of
                      the HR department. From the outset, I&apos;ve felt
                      embraced, supported, and truly appreciated in this
                      welcoming work environment.
                    </p>
                    <div className="testifier">
                      <div className="testifier_image">
                        <Image src="/assets/images/test4.jpg" alt="" />
                      </div>
                      <h3 className="testifier_info">
                        Abijuwon Faruk
                        <br />
                        <span>C.E.O Stack Overflow</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial_card">
                    <p className="testimony">
                      Five years strong with Heasy Resource, and I can attest
                      that the HR department is incomparable. The warmth,
                      support, and sense of value I&apos;ve experienced since
                      day one have made my journey here truly remarkable.
                    </p>
                    <div className="testifier">
                      <div className="testifier_image">
                        <Image src="/assets/images/test5.jpg" alt="" />
                      </div>
                      <h3 className="testifier_info">
                        Kent Barbara
                        <br />
                        <span>C.E.O Apple</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="testimonial_card">
                    <p className="testimony">
                      I&apos;ve been with Heasy Resource for over five years
                      now, and I can genuinely say that the HR department is
                      second to none. From the moment I joined, I felt welcomed,
                      supported, and valued.
                    </p>
                    <div className="testifier">
                      <div className="testifier_image">
                        <Image src="/assets/images/test6.jpg" alt="" />
                      </div>
                      <h3 className="testifier_info">
                        Zulfah Salami
                        <br />
                        <span>C.E.O Alibaba </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper testimonial_container">
              <div className="swiper-wrapper"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        {/* <!-- ===================== CONTACT SECTION ========= --> */}
        <section className="contact section" id="contact">
          <div className="container">
            <div className="section_header">
              <div className="section_title_wrapper">
                <h4 className="section_head">Contact us</h4>
                <h2 className="section_title">Get in touch with us.</h2>
              </div>
              <Image
                src="/assets/images/Vector_Dots.png"
                alt=""
                className="section_header_image"
              />
            </div>
            <div className="contact_wrapper">
              <Image
                src="/assets/images/call.png"
                alt=""
                className="contact_img"
              />
              <form action="" className="contact_form">
                <input type="text" name="" id="" placeholder="Name" />
                <input type="email" name="" id="" placeholder="Email" />
                <textarea
                  rows=""
                  className="contact_input"
                  cols=""
                  placeholder="Message..."
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="btn submit_btn"
                />
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section">
        <div className="container">
          <ul className="footer_container">
            <li className="footer_brand">
              <Image
                src="/assets/svgs/HRlogo.svg"
                alt=""
                className="footer_brand_logo"
              />
              <p className="footer_description">
                We are here to facilitate your journey, making HR management
                effortless, and enhancing the well-being of your workforce.
              </p>
            </li>
            <li className="footer_item">
              <h4 className="footer_item_title">Features</h4>
              <a href="#" className="footer_link">
                Employee Management
              </a>
              <a href="#" className="footer_link">
                Payroll
              </a>
              <a href="#" className="footer_link">
                Leave Management
              </a>
              <a href="#" className="footer_link">
                Hiring
              </a>
              <a href="#" className="footer_link">
                Analytics
              </a>
            </li>
            <li className="footer_item">
              <h4 className="footer_item_title">Company</h4>
              <a href="#about-us" className="footer_link">
                About Us
              </a>
              <a href="#pricing" className="footer_link">
                Pricing
              </a>
              <a href="#contact" className="footer_link">
                Contact Us
              </a>
              <a href="#" className="footer_link">
                FAQs
              </a>
              <a href="#" className="footer_link">
                Privacy Policy
              </a>
              <a href="#" className="footer_link">
                Security
              </a>
            </li>
            <li className="footer_item">
              <h4 className="footer_item_title">Social Media</h4>
              <a href="#" className="footer_link">
                Twitter
              </a>
              <a href="#" className="footer_link">
                Instagram
              </a>
              <a href="#" className="footer_link">
                Snapchat
              </a>
              <a href="#" className="footer_link">
                Facebook
              </a>
              <a href="#" className="footer_link">
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="copyright">© Copyright 2023 | All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
