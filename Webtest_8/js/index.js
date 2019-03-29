function getTime(a) {
    if(a<10){
         var b="0"+a.toString();
         return b;
    }else {
        return a;
    }
}

function getDateAndTime() {
    var getDate =new Date();
    var w=getDate.getUTCDay();
    switch (w) {
        case 1:var week="星期一"
            break;
        case 2:var week="星期二"
            break;
        case 3:var week="星期三"
            break;
        case 4:var week="星期四"
            break;
        case 5:var week="星期五"
            break;
        case 6:var week="星期六"
            break;
        case 0:var week="星期天"
            break;
    }
    var date=getDate.getUTCDate();

    var h=getTime(getDate.getHours());
    var m=getTime(getDate.getMinutes());
    var s=getTime(getDate.getSeconds());
    var time=h+":"+m+":"+s;
    document.getElementById("week").innerHTML=week;
    document.getElementById("date").innerHTML=date;
    document.getElementById("time").innerHTML=time;
}
setInterval("getDateAndTime()",1000);