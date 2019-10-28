import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import BannerImg from "../components/images/bannerImg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<section class="banner-area relative" id="home" >
			<div class="overlay overlay-bg"></div>
			<div class="container-fluid">
				<div class="row fullscreen d-flex align-items-center justify-content-between" >
					<div class="col-lg-6 col-md-6 banner-img" style={{ marginTop: "150px" }}>
						<BannerImg />
					</div>
					<div class="banner-content col-lg-6 col-md-6" style={{ marginTop: "150px"}}>
						<h1 class="text-uppercase">
							<span>Hillary Foundation </span> to <br/> help you
						</h1>
						<a href="#" class="primary-btn mt-40">Become a Member</a>
					</div>
				</div>
			</div>
		</section>
		<section class="schedule-area section-gap">
			<div class="container">
				<div class="row d-flex justify-content-center">
					<div class="col-lg-12">
						<div class="section-title-wrap text-center">
							<h1>Schedule Process</h1>
							<p>Who are in extremely love with eco friendly system.</p>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="table-wrap col-lg-10">
						<table class="schdule-table table table-bordered">
							<thead class="thead-light">
								<tr>
									<th class="head" scope="col">Course name</th>
									<th class="head" scope="col">mon</th>
									<th class="head" scope="col">tue</th>
									<th class="head" scope="col">wed</th>
									<th class="head" scope="col">thu</th>
									<th class="head" scope="col">fri</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th class="name" scope="row">Horaire 1</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
								<tr>
									<th class="name" scope="row">Horaire 2</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
								<tr>
									<th class="name" scope="row">Horaire 3</th>
									<td>02.00</td>
									<td>10.00</td>
									<td>02.00</td>
									<td>02.00</td>
									<td>10.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
		<section class="cta-one-area relative section-gap">
			<div class="container">
				<div class="row justify-content-center">
					<div class="wrap">
						<h1>HILLARY FOUNDATION</h1>
						<p>
							HILLARY FOUNDATION TO HELP YOU
						</p>
						<a class="primary-btn" href="#">Become a Member</a>
					</div>
				</div>
			</div>
		</section>
  </Layout>
)

export default IndexPage
