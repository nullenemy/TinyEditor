
var formatSeperator = "<div>";

const className = {
    title: 'te-title',
    container: "te-container",
    toolbar: "te-toolbar",
    toolbarButtonUnselected: "te-toolbar-button-unselected",
    toolbarButtonSelected: "te-toolbar-button-selected",
    content: "te-content",
    popover: "te-popover",
    popoverInput: "te-popover-input",
}
const Commands = {
    bold: {
        name: 'bold',
        icon: '<b>B</b>',
        exec: () => {
            return document.execCommand('bold', false, null);
        }
    },
    italic: {
        name: 'italic',
        icon: '<i>I</i>',
        exec: () => {
            return document.execCommand('italic', false, null);
        }
    },

    underline: {
        name: 'underline',
        icon: '<u>U</u>',
      
        exec: () => {
            return document.execCommand('underline', false, null);
        }
    },

    strikeThrough: {
        name: 'strikeThrough',
        icon: '<strike>S</strike>',
       
        exec: () => {
            return document.execCommand('strikeThrough', false, null);
        }
    },

    heading1:  {
        name: 'heading1',
        icon: `<b>H<sub>1</sub></b>`,
        exec: () => {
            var selection = window.getSelection();
            var node = selection.anchorNode.parentNode;
            if(node.tagName === "H1"){
                return document.execCommand("formatBlock", false, "<div>");
            } else  {
                return document.execCommand("formatBlock", false, "<h1>");
            }
        }
    },
    heading2: {
        name: 'heading2',
        icon: `<b>H<sub>2</sub></b>`,
        exec: () => {
            var selection = window.getSelection();
            var node = selection.anchorNode.parentNode;
            if(node.tagName === "H2"){
                return document.execCommand("formatBlock", false, "<div>");
            } else  {
                return document.execCommand("formatBlock", false, "<h2>");
            }
        }
    },
    heading3: {
        name: 'heading3',
        icon: `<b>H<sub>3</sub></b>`,
        exec: () => {
            var selection = window.getSelection();
            var node = selection.anchorNode.parentNode;
            if(node.tagName === "H3"){
                return document.execCommand("formatBlock", false, "<div>");
            } else  {
                return document.execCommand("formatBlock", false, "<h3>");
            }
        }
    },
    quote: {
        name: 'quote',
        icon: '&#8220; &#8221;',
        exec: () => {
            var selection = window.getSelection();
            var node = selection.anchorNode.parentNode;
            if(node.tagName === "BLOCKQUOTE"){
                return document.execCommand("formatBlock", false, "<div>");
            } else  {
                return document.execCommand("formatBlock", false, "<blockquote>");
            }
        }
    },
    code: {
        name: 'code',
        icon: '&lt;/&gt;',
        exec: () => {
            return document.execCommand('formatBlock', false, '<pre>');
        }
    },
    insertOrderedList: {
        name: 'insertOrderedList',
        icon: '&#35;',
        exec: () => {
            return document.execCommand('insertOrderedList', false, null);
        }
    },
    insertUnorderedList: {
        name: 'insertUnorderedList',
        icon: '&#8226;',
        exec: () => {
            return document.execCommand('insertUnorderedList', false, null);
        }
    },
    insertHorizontalRule: {
        icon: '&#8213;',
        name: 'insertHorizontalRule',
        exec: () => {
            return document.execCommand('insertHorizontalRule', false, null);
        }
    },
    createLink: {
        name: 'createLink',
        icon: '&#128279;',
        exec: () => {
            togglePopover("link");
            // var url = window.prompt('Enter the link URL');
            // if (url)  return document.execCommand('createLink', false, url);
        }
    },
    insertImage: {
        name: 'insertImage',
        icon: '&#128247;',
        exec: (editor) => {
            togglePopover("image");
            //var url = window.prompt('Enter the image URL');
            // if (url) { 
            //     document.execCommand('insertImage', false, url);
            // }
        }
    }
}

var selRange;

function saveSelection() {
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            var ranges = [];
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            return ranges;
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

function restoreSelection(savedSel) {
    if (savedSel) {
        if (window.getSelection) {
            sel = window.getSelection();
            sel.removeAllRanges();
            for (var i = 0, len = savedSel.length; i < len; ++i) {
                sel.addRange(savedSel[i]);
            }
        } else if (document.selection && savedSel.select) {
            savedSel.select();
        }
    }
}

function buildButtonsFromCommands(){
    let toolbar = document.createElement("div");
    toolbar.className = className.toolbar;
    
    for(var command in Commands){
        let button = document.createElement("button");
        button.innerHTML = Commands[command].icon;
        button.className = className.toolbarButtonUnselected;
        button.onclick = function(c) {
            return function(){
                c.exec();
            }
        }(Commands[command]);
        toolbar.appendChild(button);
    }
    return toolbar;
}

function buildPopover() {
    let popover = document.createElement("div");
    let input = document.createElement("input");
    input.className = "te-popover-input";
    input.type = "text";
    
    popover.appendChild(input);
    popover.className = className.popover;
    return popover;
}

function togglePopover(type){
    let input = document.querySelector(".te-popover-input");
    input.placeholder = `please insert your ${type} here`;
    input.value = "";
    let popover = document.querySelector(".te-popover");
    if(popover.style.display === "block"){
        popover.style.display = "none";
        restoreSelection(selRange);
        document.querySelector(".te-content").focus();
    } else {
        selRange = saveSelection();
        console.log(selRange);
        popover.style.display = "block";
        input.onkeydown = function(e) {
            console.log(e);
            
            if(e.keyCode == 13){
                e.preventDefault();
                let url = input.value;
                popover.style.display = "none";
                restoreSelection(selRange);
                document.querySelector(".te-content").focus();
                if(type === "link"){
                    let result = document.execCommand('createLink', false, url);
                    console.log(result);
                } else if (type === "image"){
                    let result = document.execCommand('insertImage', false, url);
                    console.log(result);
                }
            }
        }
    }
    
}





class TinyEditor {
    constructor(parentNode){
        this.parent = parentNode;
    }
    render = () => {
        // //let title = document.createElement("h1");
        // title.className = className.title;
        // title.contentEditable = true;
        // title.innerHTML = "Hello World";
        // title.focus();

        let content = document.createElement("div");
        content.className = className.content;
        content.contentEditable = true;
        let toolbar = buildButtonsFromCommands(content);


        let popover = buildPopover();
        // this.parent.appendChild(title);
        this.parent.appendChild(toolbar);
        this.parent.appendChild(content);
        this.parent.appendChild(popover);
    }
}
let parent = document.createElement("div");
parent.className =  className.container;
document.body.appendChild(parent);
var editor = new TinyEditor(parent);
editor.render();