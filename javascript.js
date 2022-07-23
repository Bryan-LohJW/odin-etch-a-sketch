//replaceButton
const replaceButton = document.createElement('a');
replaceButton.textContent = 'Resize';
document.body.appendChild(replaceButton);

//clearButton
const clearButton = document.createElement('a');
clearButton.textContent = 'Clear';
document.body.appendChild(clearButton);
clearButton.addEventListener('click', () => {
    clearBlock();
})

//replaceButton listener
let number = 4
replaceButton.addEventListener('click', (e) => {
    let lenOfSide = prompt("Length of side (less than 100)")
    number = Number(lenOfSide);
    console.log(typeof(number), number);
    while(typeof(number) !== "number" || isNaN(number) || number > 100 || number <= 0) {
        lenOfSide = prompt("Please type a number less than 100");
        number = Number(lenOfSide);
        console.log(typeof(number), number);
    }
    delAll()
    addElements(number)
});

//creation of DOM nodes
const addElements = function (numberFunc) {
    const topContainer = document.createElement('div');
    topContainer.classList.add('top');
    //adding rows
    for (let i = 0; i < numberFunc; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.setAttribute('id', `row${i}`);
        //adding block to row
        for (let k = 0; k < numberFunc; k++) {
            const blockCreater = document.createElement('div');
            blockCreater.classList.add('block');
            blockCreater.setAttribute('id', `block${i}${k}`);
            divRow.appendChild(blockCreater);
        }
        topContainer.appendChild(divRow);
    }
    document.body.appendChild(topContainer);
    blockEventListen()
}

//setting event listener for hover
const blockEventListen = function () {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('mouseover',(e) => {
            e.target.classList.toggle('black');
        })
    });
}


//function to delete all containers
const delAll = function() {
    document.body.removeChild(document.body.querySelector('div'));
}

//function to clear all boxes
const clearBlock = function () {
    const allBlock = document.querySelectorAll('.block');
    allBlock.forEach((e) => {
        e.classList.remove('black');
    })
}

addElements(number)