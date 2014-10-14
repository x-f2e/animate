// gAnimate.js
// coming soon

var GAnimate = (function  (window) {
  // body...
  if (!window.Zepto){
    console.log("Miss Zepto");
    return;
  }

  gAnimate = function(){
    var self = this;
    return self;
  }

  gAnimate.prototype.erase = function(options) {
    var $elemet = options.elemet;
    var bgImage = options.bgImage;
    var overImage = options.overImage;
    var width = options.width;
    var height = options.height;
    var maxTimes = options.maxTimes;
    var callback = options.callback;
    var times = 0;
    $elemet.css("background-image", "url(" + bgImage + ")");

    $canvas = $('<canvas id="cnv" width="'+ width +'" height="' + height +'"></canvas>');
    $canvas.css("width", width);
    $canvas.css("height", height);
    $elemet.append($canvas);


    var ctx=$canvas.get(0).getContext("2d");
    var imgPixels;
    var img=new Image();
    $(img).attr("src", overImage);
    img.onload = function(){
        ctx.drawImage(img,0,0);
    };


    $elemet.on("touchmove", function (e) {
      e.preventDefault();
      if(times < maxTimes)
      {
          var x =  e.touches[0].pageX;
          var y = e.touches[0].pageY;
          ctx.globalCompositeOperation = "destination-out";
          ctx.beginPath();
          ctx.arc(x, y, 40, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(250,250,250,0)";//使用颜色值为白色，透明为0的颜色填充
          ctx.fill();
          ctx.globalCompositeOperation = "source-over";
          times++;
          if(times==maxTimes)
          {
              callback();
          }
      }
    });
  };
})(window);



