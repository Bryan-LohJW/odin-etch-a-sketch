//creation of DOM nodes
const topContainer = document.createElement('div');
for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.classList.add('row');
    div.setAttribute('id', `row${i}`);
    for (let k = 0; k < 4; k++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.setAttribute('id', `block${i}${k}`);
        div.appendChild(block);
    }
    topContainer.appendChild(div);
}
document.body.appendChild(topContainer);