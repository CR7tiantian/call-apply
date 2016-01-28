// 一个对象调用另一个对象的方法
function cat() {

};
cat.prototype = {
	food: "fish",
	age: "22",
	say: function() {
		alert(this.food);
	}
};
var cat1 = new cat();
cat1.say();

var dog = {
	food: "bone"
};
cat1.say.apply(dog);
//  继承
function fun1() {
	this.add = function() {
		return this.a
	}
}

function fun2() {
	this.sub = function() {
		return this.a - this.b
	}
}

function fun3() {
	this.a = 10;
	this.b = 2;
	fun1.call(this);
	fun2.call(this);
}
var f3 = new fun3()
alert(f3.add());// 10
alert(f3.sub());// 8

// call 和 apply的区别，，apply传参要传数组
function add(a,b) {
	return (a+b);
} ;
function sub(a,b) {
	return (a-b);
};
//  call方法
alert(add.call(sub,4,2));//6
alert(sub.call(add,4,2));//2

//  apply方法
alert(add.apply(sub,[4,2]));//6
alert(sub.apply(add,[4,2]));//2

//  比较多的应用,将类数组对象转换成可以应用所有数组方法的数组
var nodes = document.getElementsByTagName("p");
alert(nodes[0].innerHTML);
var nodesdoc = Array.prototype.slice.call(nodes);
nodesdoc.push("<p>hello world4</p>")
document.write(nodesdoc[3]);



















