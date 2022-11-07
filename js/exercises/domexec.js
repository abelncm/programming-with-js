console.log('Dom exercises');

function curdaydiv(){
    let data = new Date();
    let dtStr = data.getDate()+"-"+data.getMonth()+"-"+data.getFullYear();
    document.getElementById("data").innerHTML=dtStr;
}

function addTextDiv(){
    let msg = document.getElementById("msg");
    msg.innerHTML += " Belarmino";
}

function addNameForm(nome){
    let msg = document.getElementById("nome");
    msg.value = nome;
}

function getNumber(){
    let numero = document.getElementById("numero").value;
    document.getElementById("showNumber").innerHTML=numero;
}

function soma(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let _valor1 = parseInt(valor1), _valor2 = parseInt(valor2)

    document.getElementById("showsoma").innerHTML=_valor1+_valor2;
}

function greetUser() {

}

function collectPersonalInfo() {

}

function calculator(){
}

// Infant = 0-1 year
// Toddler = 2-4 yrs
// Child = 5-12 yrs
// Teen = 13-19 yrs
// Adult = 20-39 yrs
// Middle Age Adult = 40-59 yrs
// Senior Adult = 60+
function tellStageOfLife() {

}

// 0-9 = Reprovado
// 10-13 = Suficiente
// 14-16 = Bom
// 17-20 = Muito Bom
function myGrade() {

}

function totolotoNumbers() {

}

function checkMyTotoloto() {
    
}

function displayMyColor() {

}

function displayMyImage() {

}

function addToList() {

}

function removeFromList() {

}

function myPhoneNumber() {

}

function myPhoneNumberV2() {
    
}

function countdownTimer() {

}

function myRunningSquare() {

}

function stopMyRunningSquare() {

}

function disapearingSquareGame() {
    
}

function memorizationGame() {

}

function myEmotions() {
    
}

function numberSorter() {
    
}


function listCounter() {
    
}




