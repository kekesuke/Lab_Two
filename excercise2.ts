let myArray: Array<String> = [];
console.log("Task A completed! \n"); ;

function addTask(text:string):number {
    myArray.push(text);
    
    console.log("Item " + text +" has been added to the array");
    return myArray.length;
}

addTask("Complete part A");
let checkarray:number = addTask("Complete part B");
console.log("Number of items in the array is " +checkarray +"\n");
console.log("Task B completed! \n"); ;

function listAllTasks():void {
    console.log("List of items in the array is: "); ; 
    myArray.forEach(function(item)
    {
        console.log(item); ; 
    });
    
}
listAllTasks();
console.log("Task C completed! \n"); ;

function deleteTask(item:string):number {
    let index:number;
    index = myArray.indexOf(item);
    if(index > -1){
    myArray.splice(index, 1);
    console.log("Item " +item +" has been deleted from the list."); 
    }
    return myArray.length;
}

let chkArray:number = deleteTask("Complete part A");
console.log("Number of items remaining: " +chkArray);
console.log("Task D completed! \n"); ;