function tempo(hora){
    if(hora>6 && hora<12){
        return "CEDO";
    }else if(hora>=12 && hora<18) {
        return "TARDE";
    }else if((hora>18 && hora<24) || (hora>=1 && hora<6)){
        return "NOITE";
    }
}

function addTime(date,hour){
    console.log(date);
    let y = new Date(date.setUTCHours(date.getHours()+1+hour))
    return y;
}