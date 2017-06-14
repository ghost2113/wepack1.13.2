/**
 * Created by Administrator on 2017/6/14.
 *//*
module.exports = {
    entry:'./src/script/main.js',
    output:{
        path:'./dist/js',
        filename:'bundle.js'
    }
}*/

/**
 * webpack配置entry和output
 */
/*
module.exports = {
    entry:['./src/script/a.js','./src/script/b.js'],
    output:{
        path:'./dist/js',
        filename:'bundle.js'
    }
}*/
/*module.exports = {
    entry:{
        a:'./src/script/a.js',
        b:'./src/script/b.js'
    },
    output:{
        path:'./dist/js',
        filename:'bundle.js'
    }
}*/
var htmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
    entry:{
        a:'./src/script/a.js',
        b:'./src/script/b.js'
    },
  /*  output:{
        path:'./dist/js',
        //filename:'[name].js'
        //filename:'[name]-[hash].js'
        filename:'[name]-[chunkhash].js'  //每次打包hash值只有更改的文件才会改变 不更改不会改变
    },
    分离js和html生成文件路径
    */
    output:{
        path:'./dist',
        //filename:'[name].js'
        //filename:'[name]-[hash].js'
        filename:'js/[name]-[chunkhash].js',  //每次打包hash值只有更改的文件才会改变 不更改不会改变
        publicPath:'http://cdn.com'//上线生成的路径前缀
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'index.html',//此表示指向根目录
            filename:'index-[name]-[hash].html',
            inject:'head',//表示生成的script标签在head内
            title:'webpack is good',
            date:new Date(),
            minify:{
                removeComments:true,
                collapseWhiteSpace:true
            }
        })
    ]
}
