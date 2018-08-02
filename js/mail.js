var nodemailer = require('nodemailer');
var snem = require('snd-ema');
// === json
var cnf=require("../son/cnf.json")
var ema=require("../son/ema.json")

// === fun
var senEma = function() {
console.log('=== senEma =======================================');

console.log(cnf.HOST)
console.log(cnf.USR)
console.log(cnf.PSS)

snem.trEma(
cnf.HOST,
cnf.USR,
cnf.PSS,
    ema.from,
    ema.to,
    ema.cc,
    ema.sub,
    ema.mes
  );
};

senEma()
