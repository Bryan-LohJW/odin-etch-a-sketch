//creation of DOM nodes
const topContainer = document.createElement('div');
for (let i = 0; i < 4; i++) {
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    divRow.setAttribute('id', `row${i}`);
    for (let k = 0; k < 4; k++) {
        const blockCreater = document.createElement('div');
        blockCreater.classList.add('block');
        blockCreater.setAttribute('id', `block${i}${k}`);
        divRow.appendChild(blockCreater);
    }
    topContainer.appendChild(divRow);
}
document.body.appendChild(topContainer);

//setting event listener for hover
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
    block.addEventListener('mouseover',(e) => {
        e.target.classList.toggle('black');
        console.log(e.target);
    })
});