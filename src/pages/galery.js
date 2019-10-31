import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import F1Img from "../components/images/f1Img";
import BannerArea from "../components/bannerArea";
import F2Img from "../components/images/f2Img";
import F3Img from "../components/images/f3Img";
import F4Img from "../components/images/f4Img";
import F5Img from "../components/images/f5Img";
import F6Img from "../components/images/f6Img";
import F7Img from "../components/images/f7Img";
import F8Img from "../components/images/f8Img";
import F9Img from "../components/images/f9Img";
import F10Img from "../components/images/f10Img";
import F11Img from "../components/images/f11Img";
import F12Img from "../components/images/f12Img";

const GaleryPage = () => (
  <Layout>
    <SEO title="About" />
    <BannerArea page="Galeries" description="Our Pictures"></BannerArea>
    
    <section class="feature-area section-gap" style={{ marginTop: "50px" }} >
      <div class="container">
        <div class="row justify-content-center d-flex align-items-center">
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F1Img />
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure>
              <F2Img></F2Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure>
              <F3Img></F3Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F4Img></F4Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F5Img></F5Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F6Img></F6Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F7Img></F7Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F8Img></F8Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F9Img></F9Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F10Img></F10Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F11Img></F11Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 single-feature">
            <figure >
              <F12Img></F12Img>
              <div class="overlay overlay-bg"></div>
            </figure>
            <div class="text-center">
              <h4 class="mb-10">Get into shape now</h4>
              <p>
                <a href="/#">Book an appointment</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default GaleryPage
