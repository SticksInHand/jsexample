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
























