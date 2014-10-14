console.log('\'Allo \'Allo!');
console.log('test');

var tmp = new gAnimate();
tmp.erase({
  elemet: $(".testcase"),
  bgImage: "./images/bg.jpg",
  overImage: "./images/bgover.jpg",
  width: "640",
  height: "690",
  maxTimes: 30,
  callback: function(){
    console.log("over");
  }
});
