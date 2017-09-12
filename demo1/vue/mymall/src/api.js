import {environment} from  '@/assets/public/function';

let [apiPre,imgPrefix,ENV] = ['','',environment(location.host)];
let Href;

if(!window.location.origin){
	Href = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port: '')
}else{
	Href = window.location.origin;
}

if(process.env.NODE_ENV ==='development'){
    apiPre = '/local.php';
    imgPrefix = 'https://m.hzanchu.com';
}else{
    apiPre = Href+ '/api.php'
}

const Api = {

    // 图片前缀 开发中使用
    imgPre: imgPrefix,

    // 页面 api
    login:{
        login:`${apiPre}?s=api/User/do_login`,
        is_login:`${apiPre}?s=api/User/is_login`,
        user_is_verify:`${apiPre}?s=api/User/user_is_verify`,
        getUserInfo:`${apiPre}?s=api/user/getUserInfo`
    },
    register:{
        send_validate_code:`${apiPre}?s=api/Api/send_validate_code`,
        reg:`${apiPre}?s=api/User/sendUserRegistration`
    },
    home:{
        getSite:`${apiPre}?s=api/site/getlist`,
        banner:`${apiPre}?s=api/index/bannerlist`,
        getlevel1:`${apiPre}?s=api/category/getlevel1`,
        category_products:`${apiPre}?s=api/index/category_products`
    },
    detail:{
        detail:`${apiPre}?s=api/goods/info`,
        cartAdd:`${apiPre}?s=api/cart/add`,
        cartNum:`${apiPre}?s=api/cart/cartnum`
    },
    mine:{
        logout:`${apiPre}?s=api/User/logout`
    },
    search:{
        searchcategory:`${apiPre}?s=api/goods/searchcategory`,
    },
    classify:{
        getlevel1children:`${apiPre}?s=api/category/getlevel1children`,
    },
    shopCart:{
        getGoodsList:`${apiPre}?s=api/cart/getlist`,
        updateHttp:`${apiPre}?s=api/cart/update`,
        removeHttp:`${apiPre}?s=api/cart/remove`
    }
}
export default Api;