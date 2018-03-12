### 前言
我们在用vue进行开发的时候经常会遇到动态加载图片 动态绑定:src失效问题
### 基础知识
在说解决办法之前 有两个小的知识点<br>
1、static 在这个目录下的文件不会被webpack处理 简单来说 就是存放第三方文件的地方 不会被webpack解析 它会被直接复制到最终的打包目录/dist/static下 必须使用绝对路径引用这些文件
<br><br>
2、assets目录 在项目编译的过程中会被webpack处理解析为模块依赖 只支持相对路径
### <font color="red">问题</font>
动态加载assets或者本文件的情况出现404
<br>
### 原因
在webpack中会将图片当做模块处理 因为是动态加载的 所以url-loader将无法解析图片地址 然后使用npm run dev 或者使用npn run build之后导致路径没有被加工<br>
<br>
### <font color="green">解决办法</font>
1、将图片作为模块加载进去 比如images:[{src:require('./1.png')}]
<br>
2、将图片放在static目录下 但是必须写成绝对路径的形式
<br>
## <font color="red">ps:两种方式均有效！！</font>