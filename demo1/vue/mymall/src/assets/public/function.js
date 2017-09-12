// 返回 当前环境
export const environment = function (host = 'm.anchumall') {
    if(process.env.NODE_ENV ==='development'){
        return 'localhost'
    }
    else if(host.indexOf("m.") !== -1){
        return 'production'
    }
    else{
        return 'development'
    }
}