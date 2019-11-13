class Command {
    constructor(oldValue, newValue){
        this.oldValue = oldValue;
        this.newValue = newValue;
    }

    undo(){
        console.log("undo");
    }

    redo(){
        console.log("redo");
    }
}