'use strict' 

/**
避免全局变量，下面的代码中存在全局变量请修复
原因：缺少var，声明变量都是var，不用var则是全局变量
等于：return {name: 'jory'}
*/
function globals() {
   var  myObject = {
      name : 'Jory'
    };

    return myObject;
}

globals();