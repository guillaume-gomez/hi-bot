const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  callback(null, {
    text: `Hello, :ah: <@${user}>...\nYou said: ${text} which mean ${convertTextToTrainLine(text)}`,
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });
};

function convertTextToTrainLine(message) {

  const mapping = {
    0: ":m0:",
    1: ":m1:",
    2: ":m2:",
    3: ":m3:",
    4: ":m4:",
    5: ":m5:",
    6: ":m6:",
    7: ":m7:",
    8: ":m8:",
    9: ":m9:",
    /*10: ":m10:",
    11: ":m11:",
    12: ":m:12",
    13: ":m:13",
    14: ":m:14",*/
    a: ":la:",
    b: ":lb:",
    c: ":lc:",
    d: ":ld:",
    e: ":le:",
    f: ":lf:",
    g: ":lg:",
    h: ":lh:",
    i: ":li:",
    j: ":lj:",
    k: ":lk:",
    l: ":ll:",
    m: ":lm:",
    n: ":ln:",
    o: ":lo:",
    p: ":lp:",
    q: ":lq:",
    r: ":lr:",
    s: ":ld:",
    t: ":lt:",
    u: ":lu:",
    v: ":lv:",
    w: ":lw:",
    x: ":lx:",
    y: ":ly:",
    z: ":lz:",
  };

  const messageLength = message.length;
  let newString = "";
  for(let i = 0; i < messageLength; i++) {
    const c = message.charAt(i).toLowerCase();
    const cConverted = mapping[c];

    if(!cConverted) {
      newString += c;
    } else {
      newString += cConverted;
    }
  }
  return newString;
}