// var emoji = require('node-emoji');
// function loopEmoji(){
//   var emojis = [];
//
//   for (var i = 0; i < 10; i++){
//
//     emojis.push(emoji.random().emoji);
//
//   }
//   for( var i = 0; i < emojis.length; i++);
//   console.log(emojis[i]);
//
// }
// }
//
// loopEmoji();

(function printEmoji () {

  var emojiArray = [];

  for (var i = 0; i <= 20; i++) {
    emojiArray.push(emoji.random().emoji);   //emoji.random() returns an object with two key / value pairs
                                             // so use the property name 'emoji' to just print the emoji
  }

  for (var i = 0; i < emojiArray.length; i++) {
    console.log(emojiArray[i]);
  }
})();
