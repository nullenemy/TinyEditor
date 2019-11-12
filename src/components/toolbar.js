import configs from './configs'
import button from './button'
import classnames from './classnames'
function toolbar(){
    let toolbar = document.createElement("div");
    toolbar.className = classnames.toolbar;
    for(var key in configs){
        let config = configs[key];
        let b = button(config)
        toolbar.appendChild(b);
    }
    return toolbar;
}
export default toolbar;