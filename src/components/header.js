import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header">
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
						<ul>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-youtube"></i></a></li>
							<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
					<div class="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
						<a href="tel:+880 1234 654 953">
							<span class="text">+243 99 59 64 593</span>
						</a>
						<a class="book-now" href="#">Donate</a>
					</div>
				</div>
			</div>
		</div>
		<div class="container main-menu">
			<div class="row align-items-center justify-content-between d-flex">
				<div id="logo">
					<h1>
						<Link to="/">
						{siteTitle}
						</Link>
					</h1>
				</div>
				<nav id="nav-menu-container navbar navbar-expand-md">
					<ul class="nav-menu">
					
						<li>
							<Link className="nav-link " to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="nav-link " to="/about">
								About
							</Link>
						</li>
						<li>
							<Link className="nav-link " to="/galery">
								Galeries
							</Link>
						</li>
						<li>
							<Link className="nav-link " to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
