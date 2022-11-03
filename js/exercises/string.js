console.log('String exercises');

// Giver a name return a message with that name included
function sayHello(name) {
    // let greetingText = 'Hello! How are you today ' + name + '?';
    let greetingText = `Hello! How are you today ${name}?`;
    return greetingText;
}

function pintCharacter(){
    let name = 'Zuleica';
    let count =0;
    for(; count<name.length; count++){
        console.log(name[count])
    } 
}

function reverse(name){
    for (let i = name.length-1; i>=0; i--){
        console.log(name[i])
    } 
}

function countVowels (string){
    string = string.toLocaleLowerCase();
    let vowelsCounted = 0
    for(i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" 
        || string[i] == "i" || string[i] == "o"
        || string[i] == "u") {vowelsCounted ++}
    }
    return vowelsCounted
}

//String start with a value
function startsWith (string, search){
    return string.startsWith(search);
}

//String start with a value, using loop
function startsWithv2 (string, search){
    for(let i = 0; i < search.length; i++){
        if(string[i]!==search[i]){
            return false;
        }
    }
    return true;
}

//String start with a value, using subtring
function startsWithv3 (string, search){
    var sub = string.substring(0,search.length);
    return search == sub;
    /*if(search == sub){
        return true;
    } else{
        return false;
    }*/
}

function concatString(msg, repeat=1){
    let msgConcat = "";
    for(let i=0;i<repeat;i++){
        //msgConcat = msgConcat + msg;
        msgConcat = msgConcat.concat(msg);
    }
    return msgConcat;
}

function escape_html(msg){
    msg = msg.replaceAll("&","");
    msg = msg.replaceAll("<","");
    msg = msg.replaceAll(">","");
    msg = msg.replaceAll("'","");
    msg = msg.replaceAll('"','');
    return msg;
}

function chunkString(msg, divide=1){
    const chunks = [];
    if(divide==1){
        chunks.push(msg);
        return chunks;
    }
    let y =0, part="";
    for(let i=0;i<msg.length;i++){
        part=part+msg[i];            
        if(part.length==divide){
            chunks.push(part);
            part='';
        }
    }
    chunks.push(part);
    return chunks;
}

function chunkStringv2(msg, divide=1){
    const chunks = [];
    if(divide==1){
        chunks.push(msg);
        return chunks;
    }
    for(let i=0;i<msg.length;i=i+divide){
        chunks.push(msg.slice(i,i+divide));
    }
    return chunks;
}

function chunkStringv3(msg, divide=1){
    const chunks = [];
    if(divide==1){
        chunks.push(msg);
        return chunks;
    }
    for(let i=0;i<msg.length;i=i+divide){
        chunks.push(msg.substring(i,i+divide));
    }
    return chunks;
}