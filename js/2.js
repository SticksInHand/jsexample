//function createFunctions(){
//    var result = new Array();
//
//    for(var i = 0; i <10;i++){
//        result[i] = function(num){
//            return num;
//        }(i);
//    }
//
//    return result;
//}
//var m1 = createFunctions()[0];
//var m2 = createFunctions()[1];
//var m3 = createFunctions()[2];
//var m4 = createFunctions()[3];
//var m5 = createFunctions()[4];
//var m6 = createFunctions()[5];
//var m7 = createFunctions()[6];
//var m8 = createFunctions()[7];
//var m9 = createFunctions()[8];
//var m10 = createFunctions()[9];
//
//alert(m1);
//alert(m2);
//alert(m3);
//alert(m4);
//alert(m5);
//alert(m6);
//alert(m7);
//alert(m8);
//alert(m9);
//alert(m10);
//
//var name = "The Window";
//
//var object = {
//    name:"My Object",
//
//    getNameFunc : function(){
//        return function(){
//            return this.name;
//        };
//    }
//};
//
//alert(object.getNameFunc()());
//
//function assignHandler(){
//    var element = document.getElementsById("someElement");
//
//    element.onclick = function(){
//        alert(element.id);
//    };
//}
//
//function assignHandler(){
//    var element = document.getElementById("someElement");
//    var id = element.id;
//
//    element.onclick = function(){
//        alert(id);
//    };
//
//    element = null;
//}

function outputNumbers(count){
    for(var i = 0; i < count; i++){
        alert(i);
    }

    var i;
    alert(i);
}

outputNumbers(10);


(function(){

    var now = new Date();

    if(now.getMonth() == 0 && now.getDate() == 1){
        alert("Happy new year!");
    }

})();

function add (num1,num2){
    var sum = num1 + num2;
    return sum;
}

//特权方法
//有权访问私有变量和私有函数的共有方法称为特权方法

function MyObject(){

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //特权方法
    this.publicMethod = function(){
        privateVariable ++;
        return privateFunction();
    };
}


function Person(name){

    this.getName = function(){
        return name;
    };

    this.setName = function(value){
        name = value;
    };

}

var person = new Person("Nicholas");
alert(person.getName());

person.setName("Greg");
alert(person.getName);

//静态私有变量
(function(){

    //私有变量的私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //构造函数
    MyObject = function(){

    };

    //公有/特权方法
    MyObject.prototype.publicMethod = function(){
        privateVariable ++;
        return privateFunction();
    };

})();

(function(){

    var name = "";

    Person = function(value){
        name = value;
    };

    Person.prototype.getName = function(){
        return name;
    };

    Person.prototype.setName = function(value){
        name = value;
    };
})();

var person1 = new Person("Nicholas");
alert(person1.getName());
person1.setName("greg");
alert(person.getName());

var person2 = new Person("Michael");
alert(person1.getName());
alert(person2.getName());

//模块模式

var singleton = {
    name:value,
    method:function(){
        //这里是方法代码
    }
};

var singleton = function(){

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }


    //特权 、共有方法和属性
    return {

        publicProperty:true,

        publicMethod:function(){
            privateVariable ++ ;
            return privateFunction();
        }

    };
}();


var application = function(){

    //私有变量和函数
    var components = new Array();

    //初始化
    components.push(new BaseComponent());

    //公共
    return {
        getComponentCount:function(){
            return components.length;
        },

        registerComponent:function(component){
            if(typeof component == "object"){
                components.push(component);
            }
        }
    };

}();


//增强的模块儿模式

var singleton = function(){

    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    //创建对象
    var object = new CustomType();

    //添加特权/公有属性和方法
    object.publicProperty = true;

    object.publicMethod = function(){
        privateVariable ++;
        return privateFunction();
    };

    //返回这个对象
    return object;
}();

























