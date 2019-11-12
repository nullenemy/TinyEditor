import configs from './configs'
import button from './button'
import classnames from './classnames'
import handlers from './handlers';
function toolbar(){
    let toolbar = document.createElement("div");
    toolbar.className = classnames.toolbar;
    for(var key in configs){
        let config = configs[key];
        let b = button(config)
        toolbar.appendChild(b);
    }
    toolbar.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON"){
            let id = e.target.id;
            handlers[id]();
        } else if(e.target.parentElement.tagName === "BUTTON") {
            let id = e.target.parentElement.id;
            handlers[id]();
        }
    })
    return toolbar;
}
export default toolbar;