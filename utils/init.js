const pkgJSON = require("./../package.json");
const welcome = require("cli-welcome");
const checkNode = require("cli-check-node");
const unhandled = require("cli-handle-unhandled");

module.exports = () => {
  //Checking
  checkNode("12");
  unhandled();

  welcome({
    title: `Arthur Gamby`,
    tagLine: `Hi, Nice to meet you!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#ffffff`,
    color: `#000000`,
    bold: true,
    clear: true,
  });
};
