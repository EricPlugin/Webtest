
function print(count) {
    for(var i=1;i<=count;i++){
        for(var j=1;j<=i;j++){
            document.write("*&nbsp&nbsp&nbsp&nbsp");
        }
        document.write("<br/>");
    }
    for(var i=1;i<=count;i++){
        for(var k=1;k<=count-i;k++){
            document.write("&nbsp&nbsp&nbsp&nbsp")
        }
        for(var j=1;j<=count;j++){
            document.write("*&nbsp&nbsp&nbsp&nbsp");
        }
        document.write("<br/>");
    }
    if(count%2==0){
        alert("count为偶数，无法生成菱形")
    }else {
        var n=(count-1)/2;
        for(var i=1;i<=n+1;i++){
            for(var j=1;j<=2*i-1;j++){
                document.write("*&nbsp&nbsp&nbsp&nbsp");
            }
            document.write("<br/>");
        }
        for(var i=1;i<=n;i++){
            for(var j=1;j<=count-2*i;j++){
                document.write("*&nbsp&nbsp&nbsp&nbsp");
            }
            document.write("<br/>");
        }
    }
}
print(prompt("请输入生成图形参数："));