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
    <script src="js/hoverIntent.js"></script>,
		<script src="js/superfish.min.js"></script>,
  ])
}
