一、介绍<br>
&nbsp;&nbsp; placeholder是HTML5的一个属性可以用来显示一些提示性的文字 但是在IE10以下浏览器不兼容
<br>
二、兼容方案
<br>
可以使用jquery中的插件placeholder.js
<br>
三、使用方法
<br>
第一步:在页面中引入脚本<br>
 <script src="https://cdn.bootcss.com/jquery-placeholder/2.3.1/jquery.placeholder.min.js"></script>可以利用cdn
 <br>
 第二步:在页面中加入脚本<br>
 $(function(){$('input,textarea').placeholder()});
 <br>
 亲自试过 完美解决！