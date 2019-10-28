import React from "react"
import { Link } from "gatsby"

const BannerArea = ({ page, description }) => {
  return (
    <section class="banner-area relative about-banner" id="home">
		<div class="overlay overlay-bg"></div>
		<div class="container">
			<div class="row d-flex align-items-center justify-content-center">
				<div class="about-content col-lg-12">
					<h1>
						{ page }
					</h1>
					<p class="link-nav">
					  <Link  to="/">
								Home
							</Link>
						<span class="lnr lnr-arrow-right"></span> <a href="about.html">
                        { description }</a></p>
				</div>
			</div>
		</div>
	</section>
  )
}

export default BannerArea
