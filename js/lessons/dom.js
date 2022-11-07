
function concatAlert() {
    let myPList = document.querySelectorAll('#concat-alert p');
    let text = '';

    myPList.forEach(el => {
        text += el.textContent + '\n' ;
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

function counter() {

}