const GD = require('gd.js');
const gd = new GD();
let ln = 0;
gd.users.login({
    username: 'gaxgd',
    password: 'nhl2020MGD'
}).then((async gax => {
      for (let i = 128; i < 79000000; i+=1) {
          let level = await gd.levels.get(i)
          if (level) {
            ln+=1
          }
          gax.postComment(i, "gax gd - commenting on every level | level number: " + ln, 250)
          if (level) {
            console.log(`posted on: ${i}`)
          }
      }
  }));
