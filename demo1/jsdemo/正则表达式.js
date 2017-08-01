// 'use strict'

function rgx(str) {
    var rg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    var mobile = /^(1\d{10})|(0\d{2,3}-?\d{7,8})|(([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2}))|(((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?)$/;
    console.log(rg.test(str))
    console.log(mobile.test('https://i.cnblogs.com/EditPosts.aspx?opt=1'))
    return rg.test(str)
}
var str = '_hello_123456@126.com';
rgx(str)