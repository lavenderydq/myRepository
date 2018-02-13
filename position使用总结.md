<font color='red'>ps:相信大家在平时的开发过程中 会经常用到position 我对它做了一个简单的总结 供大家参考</font>
###### position
1、取值：static/relative/absolute/fixed
<br>
2、<font color='red'>static：</font>是默认值 当我们不设置任何的定位的时候 position的默认取值就是static
<br>
3、<font color='red'>relative：</font>相对定位 特点就是 会导致自身的位置发生相对变化 不会影响其它元素的变化
<br>
4、<font color='red'>absolute:</font>这个取值比较特殊
<br>
4.1 首先它会脱离当前文档流 只要是脱离当前文档流就会产生破坏性 会导致父元素坍塌
<br>
4.2 具有包裹性 之前比如是p元素 会撑起整个屏幕 当你设置position:absolute之后 此时p的宽度就是内容的宽度
<br>
4.3 absolute元素会悬浮在页面上方 会遮挡住下面的内容
<br>
4.4 定位的时候是相对于带有定位的最近的祖先元素进行定位 如果祖先元素没有定位 则最终会选择相对于浏览器窗口进行定位
<br>
5、<font color='red'>fixed:</font>与absolute一致 它也会脱离当前的文档流 它的定位始终是固定的位置 相对于浏览器窗口进行定位