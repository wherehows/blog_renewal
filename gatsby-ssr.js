/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([<script src="./src/utils/darkMode.ts" />])
}

