### swiper使用总结
<font color='red'>ps:最近根据项目需求 对swiper轮播插件进行二次封装 其中遇到了很多的坑 对目前遇到的问题进行总结如下：</font>

===============================
###### <font color='blue'>1、什么是swiper</font>
   是纯js打造的滑动特效插件 面向pc 移动端能够实现焦点图等特效
###### <font color='blue'>2、swiper基本使用</font>
 1、首先要加载插件swiper.min.js swiper.min.css
 <br>
 2、根据需求写出相应的轮播区域
###### <font color='red'>3、swiper遇到的坑一</font>
<font color='red'> **问题描述：**</font>一个页面引入多个swiper出现混乱情况
<br>
**<font color='red'>解决办法：</font>**
实例化swiper的时候加上class 或者id加以区分

###### <font color='red'>4、swiper遇到的坑二</font>
**<font color='red'>问题描述:</font>**
当动态加载数据之后 轮播图无法自动轮播 
**<font color='red'>解决办法:</font>**
<br>在初始化swiper的时候加上以下两个属性：
<font color='red'>observer:true,//修改swiper自己或子元素时，自动初始化swiper</font> <br>
<font color='red'>observeParents:false,//修改swiper的父元素时，自动初始化swiper 
</font>
###### <font color='red'>5、swiper遇到的坑三</font>
**<font color='red'>问题描述:</font>**
动态加载轮播图数据的时候 分页器消失 并且不能无限轮播
<br>
**<font color='red'>解决办法：</font>**
将swiper的初始化延迟执行 setTimeout
以上是我最近遇到的常见bug 虽然swiper使用起来比较简单 但在用的时候也会出现很多令人头疼的bug 希望可以对大家有点帮助！！！