一、背景
<br>
&nbsp;&nbsp;&nbsp;&nbsp;在日常开发中总会遇到固定宽度、高度文本显示不下的情况 为了解决这种情况 选择用省略号替代
<br>
二、解决方法
<br>
单行：<br> overflow:hidden;<br> text-overflow:ellipsis;<br>
white-space:nowrap
<br>
多行:<br>
高版本浏览器:<br>overflow:hidden;<br>
display:-webkit-box;
<br>
-webkit-line-clamp:2;<br>
text-overflow:ellipsis;<br>
 -webkit-box-orient: vertical;
 <br>
 兼容IE<br>
   $('选择器').each(function(){
        var maxWidth=n;
        if($(this).text().length>maxWidth){
            $(this).text($(this).text().substring(0,maxWidth));
            $(this).html($(this).html()+"...");
        }
    });