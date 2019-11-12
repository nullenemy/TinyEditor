export default {
    undo: {
        name: 'undo',
        icon: '&#8630;',
        exec: () => {
            return document.execCommand("undo", false, null);
        }
    }, 
    redo: {
        name: 'undo',
        icon: '&#8631;',
        exec: () => {
            return document.execCommand("redo", false, null);
        }
    },
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
        icon: '&#8221;',
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
            return document.execCommand('insertHorizontalRule', false, null) 
                   && document.execCommand("insertParagraph", false, null);
        }
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