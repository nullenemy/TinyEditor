import toolbar from "./components/toolbar"
import editor from './components/editor'
import classnames from './components/classnames'
function app(){
    const element = document.createElement('div');
    element.className = classnames.container;
    element.appendChild(toolbar());
    element.appendChild(editor());
    return element;
}
  
document.body.appendChild(app());