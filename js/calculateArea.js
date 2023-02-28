// calculate area of triangle , rhombus and pentagon

// triangle area

document.getElementById('triangle-btn').addEventListener('click',function(){

    calculateAreaOfTRP('triangle-title','triangle-base-input','triangle-height-input','table-body');

});

// rhombus area

document.getElementById('rhombus-btn').addEventListener('click',function(){

    calculateAreaOfTRP('rhombus-title','rhombus-firstDiagonal-input','rhombus-secondDiagonal-input','table-body');

});

// pentagon area

document.getElementById('pentagon-btn').addEventListener('click',function(){

    calculateAreaOfTRP('pentagon-title','pentagon-perimeter-input','pentagon-apothem-input','table-body');

});

