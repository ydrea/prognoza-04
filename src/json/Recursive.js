// import { dataJson } from "./Response";

const podata = require("./Response.js");

const reCursive = (srch, data) => {
  for (var key in data)
    if (typeof data[key] === "object") {
      reCursive(srch, data[key]);
    } else {
      if (data[key] == srch) {
        console.log(data[key]);
      }
    }
};

reCursive("Clear", podata);
console.log("alo");
