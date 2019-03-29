var a="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
for(var i=1;i<=9;i++){
    for(var j=1;j<=i;j++){
        document.write(i+"*"+j+"="+i*j+"&nbsp&nbsp&nbsp");
    }
    document.write("<br/>")
}
for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        if(j==1){
            for(var k=1;k<=6-i;k++){
                document.write("&nbsp&nbsp");
            }
        }
        document.write("*&nbsp&nbsp&nbsp");

    }
    document.write("<br/>")
}
for(var i=1;i<=5;i++){
    for(var j=1;j<=5;j++){
        if(j==1){
            for(var k=1;k<=6-i;k++){
                document.write("&nbsp&nbsp");
            }
        }
        document.write("*&nbsp&nbsp&nbsp");

    }
    document.write("<br/>")
}
for(var i=1;i<=5;i++){
    if(i<=3){
        for(var j=1;j<=i;j++){
            if(j==1){
                for(var k=1;k<=6-i;k++){
                    document.write("&nbsp&nbsp");
                }
            }
            document.write("*&nbsp&nbsp&nbsp");

        }
        document.write("<br/>");
    }else {
        for(var m=1;m<=6-i;m++){

            if(m==1){
                document.write(a);
                a=a+"&nbsp&nbsp";
            }
            document.write("*&nbsp&nbsp&nbsp");
        }
        document.write("<br/>");
    }

}