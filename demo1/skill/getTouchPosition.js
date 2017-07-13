//获取触摸的位置信息
  $.getTouchPosition = function(e) {

    e = e.originalEvent || e; //jquery wrap the originevent  //该方法的作用是指向原生的事件对象，兼容
    if(e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend') {
      return {
        x: e.targetTouches[0].pageX,
        y: e.targetTouches[0].pageY
      };
    } else {
      return {
        x: e.pageX,
        y: e.pageY
      };
    }
  };

//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
//这里使用了zepto.js中的touch方法