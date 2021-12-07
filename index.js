#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;

//Colors
LkdColor = chalk.hex(`#00a0dc`).bold.inverse;

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

log(`${chalk.italic(`I am an engineer working for PlayStation in London. 
Javascript and React hold no secrets for me.
On a personal level I have had the opportunity to live in Los Angeles, Dubai and Paris.`)} 

${LkdColor(` LinkedIn `)} ${chalk.dim(
  `https://www.linkedin.com/in/arthur-gamby/`
)}

`);
