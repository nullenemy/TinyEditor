const handlers = {
    undo: function(){
        return document.execCommand("undo", false, null);
    },
    redo: function() {
        return document.execCommand("redo", false, null);
    },
    bold: function() {
        return document.execCommand('bold', false, null);
    },
    italic: function() {
        return document.execCommand('italic', false, null);
    },
    underline: function() {
        return document.execCommand('underline', false, null);
    },

    strikeThrough: function() {
        return document.execCommand('strikeThrough', false, null);
    },

    heading1: function()  {
        var selection = window.getSelection();
        var node = selection.anchorNode.parentNode;
        if(node.tagName === "H1"){
            return document.execCommand("formatBlock", false, "<div>");
        } else  {
            return document.execCommand("formatBlock", false, "<h1>");
        }
    },
    heading2: function(){
        var selection = window.getSelection();
        var node = selection.anchorNode.parentNode;
        if(node.tagName === "H2"){
            return document.execCommand("formatBlock", false, "<div>");
        } else  {
            return document.execCommand("formatBlock", false, "<h2>");
        }
    },
    heading3: function(){
        var selection = window.getSelection();
        var node = selection.anchorNode.parentNode;
        if(node.tagName === "H3"){
            return document.execCommand("formatBlock", false, "<div>");
        } else  {
            return document.execCommand("formatBlock", false, "<h3>");
        }
       
    },
    quote: function() {
        var selection = window.getSelection();
        var node = selection.anchorNode.parentNode;
        if(node.tagName === "BLOCKQUOTE"){
            return document.execCommand("formatBlock", false, "<div>");
        } else  {
            return document.execCommand("formatBlock", false, "<blockquote>");
        }
    },
    code: function(){
        return document.execCommand('formatBlock', false, '<pre>');
    },
    insertOrderedList: function() {
        return document.execCommand('insertOrderedList', false, null);
    },
    insertUnorderedList: function() {
        return document.execCommand('insertUnorderedList', false, null);
        
    },
    insertHorizontalRule: function() {
        return document.execCommand('insertHorizontalRule', false, null) 
            && document.execCommand("insertParagraph", false, null);
        
    },
    // createLink: {
    //     name: 'createLink',
    //     icon: '&#128279;',
    //     exec: () => {
    //         togglePopover("link");
    //         // var url = window.prompt('Enter the link URL');
    //         // if (url)  return document.execCommand('createLink', false, url);
    //     }
    // },
    // insertImage: {
    //     name: 'insertImage',
    //     icon: '&#128247;',
    //     exec: (editor) => {
    //         togglePopover("image");
    //         //var url = window.prompt('Enter the image URL');
    //         // if (url) { 
    //         //     document.execCommand('insertImage', false, url);
    //         // }
    //     }
    // }

}

export default handlers;