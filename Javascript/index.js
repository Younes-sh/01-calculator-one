const btnAddition = document.getElementById('addition');
const btnSubstract = document.getElementById('substraction');
const btnMultiplier = document.getElementById('multiplication');
const btnDivision = document.getElementById('division');

var inputOne = document.getElementById('op-one');
var inputTow = document.getElementById('op-two');
var result;
btnAddition.addEventListener('click', ()=>{
    result = parseInt(inputOne.value) + parseInt(inputTow.value) ;
    alert(result)
})
btnSubstract.addEventListener('click',()=>{
    result = parseInt(inputOne.value) - parseInt(inputTow.value) ;
    alert(result)
})
btnMultiplier.addEventListener('click', ()=>{
    result = parseInt(inputOne.value) * parseInt(inputTow.value) ;
    alert(result)
})
btnDivision.addEventListener('click',()=>{
    result = parseInt(inputOne.value) / parseInt(inputTow.value) ;
    alert(result)
})