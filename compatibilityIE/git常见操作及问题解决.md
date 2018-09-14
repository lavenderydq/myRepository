一、操作一<br>
配置用户信息:<br>用户名:git config --global user.name[username]<br>
密码: git config --global user.email[email]
<br>
查询用户信息:git config --list<br><br>
二、问题一
当修改用户密码在从git 上clone项目的时会报错<span style="color:red;">fatal: Authentication failed for
</span>
<br>
解决办法：在命令行输入<span style="color:green;">git config --system --unset credential.helper</span>