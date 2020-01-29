import {TodoInterface} from './interface';

class Todo implements TodoInterface{
    myArray: Array<String> = [];

    addTask(text:string):number {
    this.myArray.push(text);
        
        console.log("Item " + text +" has been added to the array");
        console.log("Total Number of items: " +this.myArray.length);
        return this.myArray.length;
    }

    listAllTasks():void {
        console.log("List of items in the array is: "); ; 
        this.myArray.forEach(function(item)
        {
            console.log(item); ; 
        });
        
    }
    
    deleteTask(item:string):number {
        let index:number;
        index = this.myArray.indexOf(item);
        if(index > -1){
        this.myArray.splice(index, 1);
        console.log("Item " +item +" has been deleted from the list."); 
        }
        console.log("Number of items remaining: " +this.myArray.length);
        return this.myArray.length;
    }   
}

let todo1 = new Todo();
todo1.addTask("part A");
todo1.addTask("part B");
todo1.addTask("part C");
todo1.listAllTasks();
todo1.deleteTask("part B");