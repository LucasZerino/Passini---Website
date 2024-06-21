import Testimonial from "./Testimonial";
import Blog from "./Blog1";
import Link from "next/link";


const Comentarios = () => {
  return (
    <>
    <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
        <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
            <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                <h2 className="main-title fw-500 tx-dark">
                    Check our client lovely words.
                </h2>
                </div>
                {/* /.title-style-five */}
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                <div className="feedback_slider_eleven">
                    <Testimonial />
                </div>
                {/* /.feedback_slider_eleven */}
                </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                className="img-holder position-relative mt-25"
                data-aos="fade-left"
                >
                <img
                    src="/images/media/img_84.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                />

                <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                </div>
                {/* /.rating-box */}

                <img
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                />
                <img
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                />
                </div>
            </div>
            </div>
        </div>
        </div>
        <img
        src="/images/shape/shape_169.svg"
        alt="shape"
        className="lazy-img shapes shape-three"
        />
        <img
        src="/images/assets/sticker_03.png"
        alt="shape"
        className="lazy-img shapes shape-four"
        data-aos="fade-up"
        />
    </div>
    <div className="blog-section-five mt-190 lg-mt-120">
    <div className="container">
        <div className="position-relative">
        <div className="row">
            <div className="col-xl-6">
            <div className="title-style-five text-center text-md-start mb-30 md-mb-10">
                <h2 className="main-title font-recoleta fw-500 tx-dark">
                Our Blog
                </h2>
            </div>
            </div>
        </div>
        {/* End .row */}

        <div className="row gx-xxl-5">
            <Blog />
        </div>
        {/* End .row */}

        <div className="btn-holder text-center">
            <div className="btn-eighteen position-relative d-inline-block tx-dark sm-mt-60">
            <Link href="/blog/blog-v3" className="fw-500 tran3s">
                Check our all news <i className="fa-solid fa-angle-right" />
            </Link>
            </div>
        </div>
        {/* End btn-holder */}
        </div>
        {/* End position-relative */}
    </div>
    </div>
    </>
  );
};

export default Comentarios;
