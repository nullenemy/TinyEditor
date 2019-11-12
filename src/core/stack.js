class UndoStack {
    constructor(){
        this.commands = [];
        this.stackPosition = -1;
        this.savePosition = -1;
    }

    undo() {
        this.commands[this.stackPosition].undo();
        this.stackPosition --;
        // this.changed();
    }

    redo() {
        this.stackPosition++;
        this.commands[this.stackPosition].redo();
        // this.changed()
    }

    canUndo() {
        return this.stackPosition >= 0;
    }

    canRedo() {
        return this.stackPosition <= this.commands.length - 1;
    }

    save() {
        this.savePosition = this.stackPosition;
        // this.changed();
    }

    dirty() {
		return this.stackPosition != this.savePosition;
	}
}