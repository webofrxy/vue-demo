
/**
比较版本号并且重定向到移动端
*/
$.compareVersion = function(a, b) {
    var as = a.split('.');
    var bs = b.split('.');
    if (a === b) return 0;

    for (var i = 0; i < as.length; i++) {
      var x = parseInt(as[i]);
      if (!bs[i]) return 1;
      var y = parseInt(bs[i]);
      if (x < y) return -1;
      if (x > y) return 1;
    }
    return 1;
  };

  <script type="text/javascript">
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
    if(isMobile) {
        location.href = 'http://m.hzanchu.com/#/home';
    }
  </script>

  <script type="text/javascript">
    function ies(){
      var tipsIE = "<div style='height:100%;background:#ccc;overflow: hidden;'><div style='width:844px;height:471px;background:#fff;margin:215px auto 0;'><img src='static/images/tips.png' style='margin-left:55px'/><div style='overflow:hidden'><div style='float:left'><p style='width:428px;font-size:18px;line-height:36px;margin:60px 0 0 55px;'>Hi!您当前浏览器的版本过低<br />可能存在安全风险,建议升级浏览器！</p><p style='overflow:hidden;margin:30px 0 26px'><img src='static/images/IE.png' style='margin:0 23px 0 55px;float:left'/><a href='http://www.baidu.com/link?url=Bq5D8K_Q8PZ_2y10cyLLIUpMd2MpbE4N2HlMiKKww44mDaN0S-Bi85enxkOqa6aek2YAtUzPEo4exo0T6XRoIRKiqqNXmMu7pL4VeRHo_vO' style='float:left;width:150px;height:40px;background:#11ac5f;line-height:40px;text-align:center;color:#fff;text-decoration: none;border-radius:19px'>升级浏览器</a></p><p><img src='static/images/google.png' style='margin:0 23px 0 55px;float:left'/><a href='http://www.baidu.com/link?url=xsNtiEyZbsuybp1OfGtIhNmO1DNHCW3kN-rDP6NuSQh8HvnaHPu9x_1pe7rxhtPTPWo45Bd-T5HfWRV7T2iX4Gd5zJh9vm5np710MTNaI5K' style='float:left;width:146px;height:36px;line-height:40px;text-align:center;color:#11ac5f;text-decoration: none;border-radius:19px;border:2px solid #11ac5f'>推荐安装</a></p></div><img src='static/images/pic.png' style='float:left;margin-top:60px'/></div></div></div>";
      document.body.innerHTML = tipsIE;
    }
    if(navigator.appName=="Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7."){
      ies();
    }else if(navigator.appName=="Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){
      ies();
    }else if(navigator.appName=="Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9."){
      ies();
    }
  </script>