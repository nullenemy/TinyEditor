import classnames from './classnames'

function button(config) {
    let button = document.createElement('button');
    button.innerHTML = config.icon;
    // button.disabled = true;
    button.id = config.name;
    // button.onclick = () => {
    //     config.exec();
    // }

    return button;
}

export default button;