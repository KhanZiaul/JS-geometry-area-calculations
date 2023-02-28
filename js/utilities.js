// set random background color function

function randomBgColor(cardId) {

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.getElementById(cardId).style.backgroundColor = bgColor;
}

// reset backgroung color function

function resetBgColor(cardId) {

    document.getElementById(cardId).style.backgroundColor = 'white';
}


// function for calculate area of triangle , rhombus and pentagon

let serial = 0;

function calculateAreaOfTRP(titleId,firstInputId,secondInputId,setInnerTextId){

    const title = document.getElementById(titleId).innerText;

    const firstInput = document.getElementById(firstInputId);

    const firstInputValueInString = firstInput.value;

    const firstInputValueInNumber = parseFloat(firstInputValueInString);

    const secondInput = document.getElementById(secondInputId);

    const secondInputValueInString = secondInput.value;

    const secondInputValueInNumber = parseFloat(secondInputValueInString);

    if(firstInputValueInString === "" || firstInputValueInString < 0 || isNaN(firstInputValueInString) || secondInputValueInString === "" || secondInputValueInString < 0 || isNaN(secondInputValueInString)){
        
        alert('Please enter positive valid input');

        return false;
    }

    serial++;

    const calculateArea = 0.5 * firstInputValueInNumber * secondInputValueInNumber ;

    let fixedArea;

    if(Number.isInteger(calculateArea)){

       fixedArea = parseInt(calculateArea);
    }

    else{

        fixedArea = calculateArea.toFixed(2);
    }

    const tableBody = document.getElementById(setInnerTextId);

    const newElement = document.createElement('tr');

    newElement.innerHTML = `
    <tr>
    
    <td>${serial} . ${title}</td>
    
    <td>${fixedArea}cm<sup>2</sup></td>
    
    <td> <button class="py-2 px-5 text-white w-36 bg-sky-500 border-sky-400 rounded-lg  font-bold hover:bg-sky-900">Convert to m<sup>2</sup></button> </td>

    </tr>
    `;

    tableBody.appendChild(newElement);

    firstInput.value = "" ;

    secondInput.value = "" ;
}


// function for calculate area of rectangle and parallelogram 


function calculateAreaOfRP(titleId,firstInputId,secondInputId,setInnerTextId){

    const title = document.getElementById(titleId).innerText;

    const firstInput = document.getElementById(firstInputId);

    const firstInputValueInString = firstInput.value;

    const firstInputValueInNumber = parseFloat(firstInputValueInString);

    const secondInput = document.getElementById(secondInputId);

    const secondInputValueInString = secondInput.value;

    const secondInputValueInNumber = parseFloat(secondInputValueInString);

    if(firstInputValueInString === "" || firstInputValueInString < 0 || isNaN(firstInputValueInString) || secondInputValueInString === "" || secondInputValueInString < 0 || isNaN(secondInputValueInString)){
        
        alert('Please enter positive valid input');

        return false;
    }

    serial++;

    const calculateArea = firstInputValueInNumber * secondInputValueInNumber ;

    let fixedArea;

    
    if(Number.isInteger(calculateArea)){

        fixedArea = parseInt(calculateArea);
     }
 
     else{
 
         fixedArea = calculateArea.toFixed(2);
     }

    const tableBody = document.getElementById(setInnerTextId);

    const newElement = document.createElement('tr');

    newElement.innerHTML = `
    <tr>
    
    <td>${serial} . ${title}</td>
    
    <td>${fixedArea}cm<sup>2</sup></td>
    
    <td> <button class="py-2 px-5 text-white w-36 bg-sky-500 border-sky-400 rounded-lg font-bold hover:bg-sky-900">Convert to m<sup>2</sup></button> </td>

    </tr>
    `;

    tableBody.appendChild(newElement);

    firstInput.value = "" ;

    secondInput.value = "" ;
}


// function for calculate area of ellipse


function calculateAreaOfEllipse(titleId,firstInputId,secondInputId,setInnerTextId){

    const title = document.getElementById(titleId).innerText;

    const firstInput = document.getElementById(firstInputId);

    const firstInputValueInString = firstInput.value;

    const firstInputValueInNumber = parseFloat(firstInputValueInString);

    const secondInput = document.getElementById(secondInputId);

    const secondInputValueInString = secondInput.value;

    const secondInputValueInNumber = parseFloat(secondInputValueInString);

    if(firstInputValueInString === "" || firstInputValueInString < 0 || isNaN(firstInputValueInString) || secondInputValueInString === "" || secondInputValueInString < 0 || isNaN(secondInputValueInString)){
        
        alert('Please enter positive valid input');

        return false;
    }

    serial++;

    const calculateArea = 3.14 * firstInputValueInNumber * secondInputValueInNumber ;
    
    let fixedArea;
    
    if(Number.isInteger(calculateArea)){

        fixedArea = parseInt(calculateArea);
     }
 
     else{
 
         fixedArea = calculateArea.toFixed(2);
     }

    const tableBody = document.getElementById(setInnerTextId);

    const newElement = document.createElement('tr');

    newElement.innerHTML = `
    <tr>
    
    <td>${serial} . ${title}</td>
    
    <td>${fixedArea}cm<sup>2</sup></td>
    
    <td> <button class="py-2 px-5 text-white w-36 bg-sky-500 border-sky-400 rounded-lg font-bold hover:bg-sky-900">Convert to m<sup>2</sup></button> </td>

    </tr>
    `;

    tableBody.appendChild(newElement);

    firstInput.value = "" ;

    secondInput.value = "" ;
}