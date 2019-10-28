/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="js/easing.min.js"></script>,
    <script src="extra/js/hoverIntent.js"></script>,
	<script src="extra/js/superfish.min.js"></script>,
	<script src="extra/js/jquery.ajaxchimp.min.js"></script>,
	<script src="extra/js/jquery.magnific-popup.min.js"></script>,
	<script src="extra/js/jquery.tabs.min.js"></script>,
	<script src="extra/js/jquery.nice-select.min.js"></script>,
	<script src="extra/js/owl.carousel.min.js"></script>,
	<script src="extra/js/mail-script.js"></script>,
	<script src="extra/js/main.js"></script>,
  ])
}
