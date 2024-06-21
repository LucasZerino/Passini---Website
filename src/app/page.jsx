"use client";

import RootLayout from "./RootLayout";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import "aos/dist/aos.css";
import "../styles/index.scss";
import Property from "./_components/Hero/Property";
import Quote from "./_components/Hero/Quote";
import Insurance from "./_components/Intro/page";
import DesignAgency from "./_components/Partness/page";
import FancySection from "./_components/Hero/FancySection";
import Comentarios from "./_components/Testimonials/page";
import ContactForm from "./_components/ContactForm/ContactForm";
import Inferior from "./_components/Footer/page";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function Page() {
  return (
    <div>
      <RootLayout>
      <Header />
      <Hero />
      <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-180 lg-pt-120 md-pb-130">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="title-style-eleven md-mb-20">
                  <h2 className="main-title tx-dark">
                    Nossos Serviços
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 ms-auto " data-aos="fade-left">
                <p className="text-lg m0">
                  Soluções personalizadas e serviços engenheirados para projetos completos.
                </p>
              </div>
            </div>
            <div className="row gx-xxl-5 pt-90 lg-pt-40 md-pt-20">
              <Property />
            </div>
            <Quote />
            <img
              src="/images/assets/sticker_01.png"
              alt="sticker"
              className="lazy-img shapes shape-one"
            />
            <div className="shapes shape-two" />
            <img
              src="/images/shape/shape_162.svg"
              alt="sticker"
              className="lazy-img shapes shape-three"
            />
            <img
              src="/images/assets/sticker_02.png"
              alt="sticker"
              className="lazy-img shapes shape-four"
            />
            <div className="shapes shape-five" />
            <div className="shapes shape-six" />
          </div>
        </div>
      </div>
      <Insurance/>
      <DesignAgency/>
      <FancySection/>
      <Comentarios/>
      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk with expereince advisors.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        eiusmod tempor incididunt. Ut enim mim veniam, quis
                        nostrud elit lorem dolor.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Fill the <br />
              form
            </div>
            <img
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
        </div>
      </div>
      <Inferior/>
    </RootLayout>
    </div>
  );
}
