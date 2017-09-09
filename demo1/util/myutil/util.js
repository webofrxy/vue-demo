/**
 * my util
*/
var util = {
    /**
     * 封装ajax函数
     * @param {String}obj.type http的连接方式，包括GET和POST
     * @param {String}obj.url 发送请求的url
     * @param {boolean}obj.async 是否为异步请求，true为异步的，false为同步的
     * @param {object}obj.data 发送的参数，格式为对象类型
     * @param {function}obj.success   ajax发送并且接受成功调用的回调函数
     * @param {function}obj.error ajax发送失败或者接受失败调用的回调函数
     */
    ajax: function(obj){
        obj = obj || {};
        obj.type = obj.type.toUpperCase() || 'GET';
        obj.url = obj.url || '';
        obj.async = obj.async || true;
        obj.data = obj.data || 'json';
        obj.success = obj.success || function(){};
        obj.err = obj.err || function(){};

        var xmlHttp = null;
        if(XMLHttpRequest){
           xmlHttp = new XMLHttpRequest();
        }else{
            xmlHttp = new ActiveXObject("Micosoft.XMLHTTP");
        }

        var params = [];
        for(var key=0;key<obj.data.length;key++){
            params.push(key+"="+obj.data[key])
        }
        var postData = params.join('&');
        if(obj.type.toUpperCase() == 'POST'){
            xmlHttp.open(obj.type,obj.url,obj.async);
            xmlHttp.setRequestHeader({'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'});
            xmlHttp.send(postData);
        }else if(obj.type.toUpperCase() == 'GET'){
            xmlHttp.open(obj.type,obj.url+'?'+postData,obj.async);
            xmlHttp.send(null);
        }
        xmlHttp.onreadystatechange=function(){
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                obj.success(xmlHttp.responseText)
            }else{
                obj.error(xmlHttp.responseText)
            }
        }
    },
    //图片未加载出来时用第一张图片代替
    aftLoadImg: function(obj,url,cb){
        var timg = new Image(),_this = this;
        timg.src = url;
        timg.onload = function(){
            obj.src = timg.src;
            if(cb&&_this.istype(cb,'function')){
                cb(obj);
            }
        }
    },
    /**
     * 图片滚动懒加载
     * className{String} 准备加载的图片的类名
     * num{Number} 距离多少的时候开始加载 默认为0
     */
    loadImg: function(className,num){
        var _className = className|| 'util-load-img', _num = num || 0, _this = this;
        var tImgLoad = document.getElementsByClassName(_className);
        for(var i = 0;i<tImgLoad.length;i++){
            if(document.documentElement.clientHeight + document.body.scrollTop > tImgLoad[i].scrollTop - _num && !tImgLoad[i].isLoad){
                //记录图片是否已经加载
                tImgLoad[i].isLoad = true;
                //设置图片过渡，图片下来的时候一个透明度的变化
                tImgLoad[i].style.cssText = "tranction: '',opacity: 0";
                this.aftLoadImg(tImgLoad[i],tImgLoad[i].dataset.src,function(t){
                    setTimeout(function(){
                        if(t.isLoad){
                            _this.removeClass(t,_className);
                            t.style.cssText = '';
                        
                        }
                    },1000);
                })
            } else {
               this.aftLoadImg(tImgLoad[i],tImgLoad[i].getAttribute('data-src'),function(t) {
                     setTimeout(function(){
                        if(t.isLoad){
                            _this.removeClass(t,_className);
                            t.style.cssText = '';
                        
                        }
                    },1000);
               })
            }
            (function(i){
                setTimeout(function(){
                    tImgLoad[i].style.cssText = "transtion: all 1s ;opacity: 1";
                },16)
            })(i);
        }
    }
}