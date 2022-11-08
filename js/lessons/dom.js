
function concatAlert() {
    let myPList = document.querySelectorAll('#concat-alert p');
    let text = '';

    myPList.forEach(el => {
        text += el.textContent + '\n';
    })

    alert(text);
}

function replaceItem4() {
    let myPList = document.querySelectorAll('#replace-item-4 p');

    myPList.forEach(el => {

        if (el.textContent == 'My message 4') {
            el.textContent = 'My new message';
        }

    })
}

// function increment() {
//     let span = document.querySelector('#counter span');
    
//     let number = parseInt(span.textContent);
//     let total = number + 1;

//     span.textContent = total;
// }

function colorama(span){
    if (span.textContent<=5){
        span.style.color='blue'
    }else {
        span.style.color='green'
    }
}

function increment() {
    let span = document.querySelector('#counter span');
    if (span.textContent<10){
        span.textContent = parseInt(span.textContent)+1;
        colorama(span)
    }
    
}

function decrement(){
    let span=document.querySelector('#counter span');
    if (span.textContent>=2) {
        span.textContent=parseInt(span.textContent)-1;
        colorama(span)        
    }
        
}

function reset(){
    let span=document.querySelector('#counter span');
    span.textContent=1
}

function changeBoxColor(){
    let selectedColor = document.querySelector('#colors').value;
    document.querySelector('.coloring-box').style.backgroundColor = selectedColor;
    
}


let myInterval;
function clockCounter(){
    document.querySelector('#clock-counter .start-btn')
        .setAttribute('disabled', 'true');
    
    myInterval = setInterval(function() {
        console.log('a executar');

        let span = document.querySelector('#clock-counter span');
        let num = parseInt(span.textContent);
        
        if(num==10)
            clearInterval(myInterval);
        else
            span.textContent=num+1;

    }, 1000);
}

function stop() {
    clearInterval(myInterval);
}

function calculate() {
    let param1 = parseInt(document.querySelector('#calculator .param1').value);
    let param2 = parseInt(document.querySelector('#calculator .param2').value);
    let operator = document.querySelector('#calculator .operator').value;
    let span = document.querySelector('#calculator .result');

    let result=0;

    if(operator == '+') {
        result = param1 + param2;
    } else if(operator == '-') {
        result = param1 - param2;
    }else if(operator == '/') {
        result = param1 / param2;
    }else if(operator == '*') {
        result = param1 * param2;
    }

    span.textContent = result;
}

   