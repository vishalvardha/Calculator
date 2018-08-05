
var var1;
var var2;
var oper;
var num;
function get(di)
{
    var area = document.getElementById('area');
    
    area.value += document.getElementById(di).value;
    console.log(area.value);
}

function onPressBackspace() {
    var area = document.getElementById('area');
    area.value = area.value.substring(0, area.value.length - 1);
}

function operator(element)
{
    var area = document.getElementById('area');
    var1 = area.value.toString();
   console.log(var1);
    area.value = " ";
//// console.log(area.value);
    oper = element;
    //console.log(oper+ "   "+ element);
    
}

function sqrtt(){
    var area = document.getElementById('area');
    var h1 = parseFloat(area.value);
    var result = Math.sqrt(h1);
     
     if(result.toString().length>11){
        area.style.fontSize = "40px";
    }
    
    area.value = result;
}

function equals(){
     var area = document.getElementById('area');
    var2 = area.value;
   // console.log("var2 value : "+var2);
    //console.log("var1 value : "+var1);
     let c=0;
    switch(oper){
           
        case "+":  c = parseFloat(var1)+ parseFloat(var2);
                  // console.log(c);
            break;
        case "-" :  c =  parseFloat(var1)- parseFloat(var2);
                    console.log(c);
            break;
            
        case "*":   c =  parseFloat(var1)*parseFloat(var2);
                    console.log(c);
            break;
        case "/": c =  parseFloat(var1)/parseFloat(var2);
                    console.log(c);
            break;
        case "%": c =  parseFloat(var1)%parseFloat(var2);
                    console.log(c);
            break;
        
             
            
    }
 area.value = c;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function append(e){
    var a = e;
    var area = document.getElementById("area");
    area.value += a;
}
function square(){
    var a =parseFloat($("#area").val());
   document.getElementById("area").value = a*a;
//    $("#area").val() = a*a;
     
}
function divBy() {
    var a =parseFloat($("#area").val());
    document.getElementById("area").value = (1/a);
}

window.onload = function() {
var targArea = document.getElementById ("area");

targArea.addEventListener('keydown',  reportKeyEvent);

}

function reportKeyEvent (zEvent) {
    var reportStr   = zEvent.code;
console.log(reportStr);
    if(reportStr=="NumpadAdd")
        operator("+");
    if(reportStr=="NumpadSubtract")
        operator("-");
    if(reportStr=="NumpadMultiply")
        operator("*");
    if(reportStr=="NumpadDivide")
        operator("/");
    
    if(reportStr=="NumpadEnter")
        {
        equals();
//        $("textarea").preventDefault;
        }
    if(reportStr=="NumpadDecimal")
        {
            append(".");
        }
    
    
}