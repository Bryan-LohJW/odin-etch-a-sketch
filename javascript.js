//button
const button = document.createElement('a');
button.textContent = 'Click Me';
document.body.appendChild(button);

//button listener
let number = 4
button.addEventListener('click', (e) => {
    let lenOfSide = prompt("How many boxes?")
    number = Number(lenOfSide);
    console.log(typeof(number), number);
    while(typeof(number) !== "number" || isNaN(number) || number === 0) {
        lenOfSide = prompt("Please type a number");
        number = Number(lenOfSide);
        console.log(typeof(number), number);
    }
    delAll()
    addElements(number)
    b
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

addElements(number)