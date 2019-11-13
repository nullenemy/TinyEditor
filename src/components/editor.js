import classnames from './classnames'

function editor(){
    let editor = document.createElement("div");
    editor.className = classnames.content;
    editor.contentEditable = true;
    editor.focus();
    editor.innerHTML = "<p><br></p>";
    document.execCommand("defaultParagraphSeparator", false, "p");
    editor.addEventListener("input", function(){
        if( editor.innerHTML.trim() === "" ||  editor.innerHTML.trim() === "<br>")
        {
            editor.innerHTML = "<p><br></p>"
        }
    })

    editor.addEventListener("onChange", (value) =>{
        console.log(value);
    })
    return editor;
}

export default editor;