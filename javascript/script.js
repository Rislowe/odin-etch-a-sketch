let body = document.querySelector('body');

let createGrid = (number) =>
{
    let section = 960/number;
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

        body.appendChild(newDiv);
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

let eraseGrid = ()=>
{
    let body = document.querySelector('body');

    let rows = document.querySelectorAll('.grid_row');

    rows.forEach(row =>
        {
            while(row.hasChildNodes())
            {
                let child = row.querySelector('.box');
                row.removeChild(child);
            }
            body.removeChild(row);
        });
    
}

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

createGrid(4);