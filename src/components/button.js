function button(config) {
    let button = document.createElement('button');
    button.innerHTML = config.icon;
    button.onclick = () => {
        config.exec();
    }
    return button;
}

export default button;