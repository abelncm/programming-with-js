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