var nodemailer = require('nodemailer');
var snem = require('snd-ema');
// === json
var conf=require("./conf.json")
var ema=require("../son/ema.json")
// === ema
var frem="info@mail.com
var toem="you@mail.com"
var cc="cc@mail.com"

// === fun
var senEma = function() {
console.log('=== senEma =======================================');

console.log(conf.HOST)
console.log(conf.USR)
console.log(conf.PSS)

snem.trEma(
conf.HOST,
conf.USR,
conf.PSS,
    frem,
    toem,
    cc,
    ema.sub,
    ema.mes
  );
};

senEma()
