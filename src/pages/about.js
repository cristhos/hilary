import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutImg from "../components/images/aboutImg";
import BannerArea from "../components/bannerArea";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <BannerArea page="About" description="About Us"></BannerArea>
    <section class="about-area section-gap">
		<div class="container">
			<div class="row d-flex justify-content-center">
				<div class="col-lg-12">
					<div class="section-title-wrap text-center">
						<h1>Hillary Foundation can change your life</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					</div>
				</div>
			</div>

			<div class="row justify-content-between align-items-center">
				<div class="col-lg-6 about-right">
					<div class="row">
						<div class="col-lg-6">
							<div class="single-about">
								<h4>Why Choose Us</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam.
								</p>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="single-about">
								<h4>Our Properties</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam.
								</p>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="single-about">
								<h4>Legal Notice</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam.
								</p>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="single-about">
								<h4>Legal Notice</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-6 about-left">
					<div style={{ maxWidth: `400px`}}>
						<AboutImg/>
					</div>
					
				</div>
			</div>
		</div>
	</section>
  </Layout>
)

export default AboutPage
