
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