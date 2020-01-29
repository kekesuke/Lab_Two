"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.myArray = [];
    }
    Todo.prototype.addTask = function (text) {
        this.myArray.push(text);
        console.log("Item " + text + " has been added to the array");
        console.log("Number of items remaining: " + this.myArray.length);
        return this.myArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("List of items in the array is: ");
        ;
        this.myArray.forEach(function (item) {
            console.log(item);
            ;
        });
    };
    Todo.prototype.deleteTask = function (item) {
        var index;
        index = this.myArray.indexOf(item);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log("Item " + item + " has been deleted from the list.");
        }
        console.log("Number of items remaining: " + this.myArray.length);
        return this.myArray.length;
    };
    return Todo;
}());
var todo1 = new Todo();
todo1.addTask("part A");
todo1.addTask("part B");
todo1.addTask("part C");
todo1.listAllTasks();
todo1.deleteTask("part B");
