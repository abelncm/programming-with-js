console.log('Date/time exercises');


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

function is_week_day(date){
    if(date.getDay()==0 || date.getDay()==6){
        return "Fim de semana"
    }else{
        return "Dia de semana";
    }
}

function yesterday(date){
    date = date.setDate(date.getDate()-1)
    return new Date(date); 
}

function min_date(dates){
    let minDate = undefined;
    for(let i=0;i<dates.length;i++){
        if(i==0){
            minDate = dates[i];
        }else{
            if(minDate > dates[i]){
                minDate=dates[i];
            }
        }        
    }
    return minDate; 
}