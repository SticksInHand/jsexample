/**
 * Created by M.Jin on 14-7-22.
 */
//BOM
// window对象  —— BOM的核心

//控制窗口、框架和弹出窗口

//利用location 对象中的页面信息

//使用navigator 对象了解浏览器

var age = 29;
function sayAge(){
    alert(this.age);
}

alert(window.age);
sayAge();
window.sayAge();

