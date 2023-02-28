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

// calculate area of rectangle and parallelogram

// rectangle area

document.getElementById('rectangle-btn').addEventListener('click',function(){

    calculateAreaOfRP('rectangle-title','rectangle-width-input','rectangle-length-input','table-body');

});

// parallelogram area

document.getElementById('parallelogram-btn').addEventListener('click',function(){

    calculateAreaOfRP('parallelogram-title','parallelogram-base-input','parallelogram-height-input','table-body');

});

// calculate area of ellipse

// ellipse area

document.getElementById('ellipse-btn').addEventListener('click',function(){

    calculateAreaOfEllipse('ellipse-title','ellipse- majorRadius-input','ellipse- minorRadius-input','table-body');

});