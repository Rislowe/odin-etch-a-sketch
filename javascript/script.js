//Gloabl Variables
const BOX_SIZE = 600;
const STARTING_SIZE = 16;

//Spawn base layout.
let body = document.getElementsByTagName("BODY")[0];

let container = document.querySelector('.main-container');

let etchBox = document.createElement('div');
etchBox.classList.add('etch-box');

container.appendChild(etchBox);

//createGrid() - divides the box into sections
let createGrid = (number) =>
{
    let section = BOX_SIZE/number;
    let format = section + "px";

    for(let i = 1; i <= number; i++)
    {
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid_row');

        for(let j = 1; j <= number; j++)
        {
            let subDiv = document.createElement('div');
            let className = "column"+j;
            
            subDiv.id = "box"+i+j;

            subDiv.classList.add(className, "box");

            subDiv.addEventListener("mouseover", event =>
            {
                event.target.classList.add('boxTrail');
            })

            newDiv.appendChild(subDiv);
        }

        etchBox.appendChild(newDiv);
    }

    let rows = document.querySelectorAll('.grid_row');
    let boxes = document.querySelectorAll('.box');

    rows.forEach((row)=>
    {
        row.style.cssText = "height: "+ format;
    })

    boxes.forEach((box) =>
    {
        box.style.cssText = "height: "+format+"; width: " +format;
    })

}


//eraseGrid() - removes grid boxes to spawn a new one
let eraseGrid = ()=>
{
    let etchBox = document.querySelector('.etch-box');

    let rows = document.querySelectorAll('.grid_row');

    rows.forEach(row =>
        {
            while(row.hasChildNodes())
            {
                let child = row.querySelector('.box');
                row.removeChild(child);
            }
            etchBox.removeChild(row);
        });
    
}


//bind listener to button and then use to spawn a new grid.
let newGridButton = document.querySelector('#new-grid-button');

newGridButton.addEventListener("click", ()=>
{
    let complete = false;
    let number = Number.parseInt(prompt("Please Enter a number between 1-100: "));

    while(complete == false)
    {
        if(isNaN(number))
        {
            number = prompt("Incompatible Value Entered, Please try again: ")
        }
        else if(number < 0 || number > 100)
        {
            number = prompt("Incompatible Value Entered, Please try again: ")
        }
        else
        {
            eraseGrid();
            createGrid(number);
            complete = true;
        }
    }
})


//Main functionality

createGrid(STARTING_SIZE);