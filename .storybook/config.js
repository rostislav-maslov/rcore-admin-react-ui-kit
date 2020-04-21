import { configure } from "@storybook/react";
import "../src/globals.css";

// automatically import all files ending in *.stories.js
configure(
  require.context("../src/stories", true, /\.stories\.(tsx|jsx|js|ts)$/),
  module
);
