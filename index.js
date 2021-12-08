#!/usr/bin/env node
const chalk = require("chalk");
const log = console.log;

const init = require("./utils/init");

//Colors
LkdColor = chalk.hex(`#00a0dc`).bold.inverse;

//Alerts
const sym = require("log-symbols");
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.yellow;
const error = chalk.red;

(() => {
  init();

  log(`${chalk.italic(`I am an engineer working for PlayStation in London. 
  Javascript and React hold no secrets for me.
  On a personal level I have had the opportunity to live in Los Angeles, Dubai and Paris.`)} 
  
  ${LkdColor(` LinkedIn `)} ${chalk.dim(
    `https://www.linkedin.com/in/arthur-gamby/`
  )}`);

  log(`
    ${sym.success} ${success(` SUCCESS `)} Thank you for checking out my CLI.
    ${sym.info} ${info(` INFO `)} I'm open to discussion.
    ${sym.warning} ${warning(` WARNING `)} Please don't spam me for nothing.
    ${sym.error} ${error(` ERROR `)} I'm on vacation, I'll be in touch soon.
  `);
})();
