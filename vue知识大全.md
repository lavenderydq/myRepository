## 生命周期
1、概念
一个组件实例从创建到销毁的过程，即为一个生命周期<br>
2、生命周期钩子
 beforeCreate  组件刚刚被创建,el和data还没有被初始化<br>
 created   完成了data数据的初始化,el没有<br>
beforeMount  完成了el和data数据的初始化<br>
 mounted 完成模板的挂载<br>
beforeUpdate<br>
updated<br>
beforeDestory<br>
destoryed<br>
3、beforeCreate ---loading事件
      created ---结束loading事件
## 组件传值
1、父组件给子组件传值<br>
（1）子组件通过props属性接收父组件传值<br>
（2）父组件引入和注册子组件<br>
（3）在父组件中，在引入的子组件标签中绑定要传入的值<br>
2、子组件传值给父组件<br>
  （1）在子组件中通过一种方法触发机制比如 @click=message()
       message(){this.$emit('listen','传入的值')}<br>
   (2) 父组件中引入注册子组件 在父组件引入子组件的标签中监听事件message，即可接收到数据<br>
3、兄弟组件之间的传值<br>
    （1）兄弟组件之间要借助事件车，通过事件车的方式传递数据（建立公共文件eventBus.js）
     import vue from 'vue'
     export default new vue<br>
    （2）创建vue实例，让兄弟组件之间公用一个事件机制
     （在两个组件中分别引入eventBus.js）

    （3）传递数据方bus.$emit(方法名,传递的数据)
    （4）接收方 bus.$on(方法名，接收的数据)

## MVVM理解
m :model数据层<br>
v:view 视图层<br>
view-model :链接数据层和视图层<br>
我们将网络中请求的数据绑定在model数据层上，将数据层中的数据转化到viewmodel上，在viewmodel中处理一些逻辑，然后将viewmodel上的数据绑定在view上，更新界面
## Vuex
1、vuex是vue.js中的一个状态管理模式，对项目中复杂的状态进行统一的管理<br>
2、vuex中有5个基本对象 <br>
      state:公共状态<br>
      getters:派生状态*<br>
      mutations:提交状态修改<br>
      actions:和mutations类似，不过支持异步操作<br>
      modules:相当于store的一个子模块<br>
3、使用 见具体项目demo<br>
未完待续！！！


