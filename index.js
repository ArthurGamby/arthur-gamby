#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Hi, Nice to meet you!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Arthur gamby 

I am an engineer working for PlayStation in London for many years. 
Javascript and React hold no secrets for me.
On a personal level I have had the opportunity to live in Los Angeles, Dubai and Paris. 

🎮  PlayStation: Epozeoner78
📖  Github: https://github.com/ArthurGamby
👨  LinkedIn: https://www.linkedin.com/in/arthur-gamby/

`);
