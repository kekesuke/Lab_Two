var myArray = [];
console.log("Task A completed! \n");
;
function addTask(text) {
    myArray.push(text);
    console.log("Item " + text + " has been added to the array");
    return myArray.length;
}
addTask("Complete part A");
var checkarray = addTask("Complete part B");
console.log("Number of items in the array is " + checkarray + "\n");
console.log("Task B completed! \n");
;
function listAllTasks() {
    console.log("List of items in the array is: ");
    ;
    myArray.forEach(function (item) {
        console.log(item);
        ;
    });
}
listAllTasks();
console.log("Task C completed! \n");
;
function deleteTask(item) {
    var index;
    index = myArray.indexOf(item);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Item " + item + " has been deleted from the list.");
    }
    return myArray.length;
}
var chkArray = deleteTask("Complete part A");
console.log("Number of items remaining: " + chkArray);
console.log("Task D completed! \n");
;
