// server-styles.js
const { ServerStyleSheet } = require('styled-components');

export default function collectStyles() {
  const sheet = new ServerStyleSheet();
  return sheet;
}