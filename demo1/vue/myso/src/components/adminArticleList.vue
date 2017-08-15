<template>
    <div>
        <h2 class="sub-header">文章列表 </h2>
        <el-table
            v-show="emptyList == 1"
            :data="articleList"
            stripe
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题"
            >
            </el-table-column>
            <el-table-column
              prop="date"
              label="时间"
            >
            </el-table-column>
            <el-table-column
              label="操作"
            >
                <template scope="scope">
                    <el-button type="text">详情</el-button>
                    <el-button type="text" @click="deleteArticle(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div v-show="emptyList == 0">
            <span style="display:inline-block;width: 100%;text-align: center;">快去写点东西吧！！！</span>
        </div>
    </div>
</template>
<script>
export default {
  data(){
        return{
            articleList: [],
            emptyList: 2,
            //pagination
            articles:[],
            pages:[],
            curPage:1,
            pageCount:Number,
            //sort
            sortby:'created',
            sortdir:'desc',
            followPageSort:'',
            arrow:'⤓',
            showArrow:'created',
            //filter
            categories:[],
            users:[],
            category:'',
            user:'',
            keyword:''
        }
    },
     methods:{
        //获取所有文章  
        getArticleList(){
            let that = this;
            this.$axios.get('api/admin/articleList').then(function(reponse){
                console.log(reponse.data);
                that.articleList = reponse.data;
                if(that.articleList.length>=1){
                    that.emptyList = 1;
                }
            }).catch(function(err){
                console.log(err)
            })
        },
        //删除文章
        deleteArticle(index, row){
            let that = this;
            console.log(row.title)
            this.$axios.post('api/admin/deleArticle',{title:row.title}).then(function(res){
                that.getArticleList();
                // if(res.status==200) this.articleList.splice(index,1);
                if(that.articleList.length<1){
                    that.emptyList = 0;
                }
                Message.success('删除文章成功')
            }, function(res){
                Message.error('删除文章列表： '+ res.status);
            });
        },
        // //format: sortby(1, 'title', 'desc')
        // sortList(page, sortby, sortdir, category, user, keyword){
        //     this.sortby=sortby;
        //     if(this.sortdir=='desc'){
        //         this.arrow='⤓';
        //         this.sortdir='asc';
        //         this.followPageSort='desc' //点击翻页和点击那个选项正好相反
        //     }else{
        //         this.arrow='⤒';
        //         this.sortdir='desc';
        //         this.followPageSort='asc'
        //     }
        //     this.getArticleList(page, sortby, sortdir, category, user, keyword);
        // },
        // //获取所有分类
        // getCategories(){
        //     this.$axios.get('/category').then(function(res){
        //         this.categories = res.body;
        //     },function(res){
        //         alert('获取分类失败： '+ res.status);
        //     });
        // },
        // //获取所有作者
        // getUsers(){
        //     this.$axios.get('/user').then(function(res){
        //         this.users = res.body;
        //     },function(res){
        //         alert('获取作者失败： '+ res.status);
        //     });
        // }
    },
    components:{
    },
    created(){
        this.getArticleList();
        // this.getCategories();
        // this.getUsers();
    }
}
</script>
<style src="../css/dashboard.css">

</style>
