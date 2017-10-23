<?php
namespace app\index\controller;

use think\Request;
use think\Config;
use think\Controller;
use think\View;

class Index extends Controller
{
    public function index($type='json',Request $request)
    {
        if(!in_Array($type,['json','jsonp','xml'])){
            $type = 'json';
        }
        $res = [
            'code' => 200,
            'result' => [
                'list' => [1,2,3,4,5]
            ]
        ];
        Config::set('default_return_type','json');
        return $res;
        //dump($res);//tp5的controller中不允许直接echo
    }

    public function myView()
    {   
        # view助手函数使用方法；传递三个参数

        # 默认模板
        # 默认模板的查找路径为：app\index\view\index\myView.html 方法；都是方法对应方法
        // return view();
        // 如果以 ./ 开头，就是查找入口文件public下的文件
        return view('myView',[
            'name' => 'jack',
            'age' => 18,
            'email' => '913685509@qq.com'
        ]);
    }

    public function myFetch()
    {
        # fetch 的使用方法和view相同都是用来调取模板文件的，要使用fetch必须extends controller
        # 如果HTML中存在方法中的变量，即使在HTML中注释掉也会报错，is not define
         $this -> assign('name','tom');
        
        return $this -> fetch('upload');
    }

    public function myAssign(){
        # assign 的使用方法同fetch相同
        return $this -> assign('name','tom');
    }

    public function myDisplay()
    {
        # display 可以直接在方法中定义模板，不需要专门写一个模板文件,返回的是一个字符串，生成一个模板文件，而fetch是调用一个模板文件
        return $this -> display('这是{$myname}的模板文件',[
            'myname' => 'rose'
        ]);
    }

    public function mytpView()
    {
        View::share('key','your key');
    }
    
}
