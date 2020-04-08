var overNightInput=document.querySelector("#overnight");
var erCareField=document.querySelector("#erCare")
var intensiveField=document.querySelector("#intensive")
var annualField=document.querySelector("#annual")

overNightInput.oninput=(e)=>{
    if(!isNaN(e.target.value)){
            outputVal(+e.target.value)
    }
    else{
        console.log("Error: Input needs to be number!")
        return;
    }
}

function outputVal(num){
    //half n double our arg
    var half=num/2
    var double=num*2
    var hundred=num*100
    var annual=num*365;

    erCareField.value=half;
    intensiveField.value=double;
    anyaccInput.value=hundred

    var doubleAcc=hundred*2
    var tripleAcc=hundred*3

    autoField.value=doubleAcc;
    commonField.value=tripleAcc;
    annualField.value=annual
}


var anyaccInput=document.querySelector("#anyacc")
var autoField=document.querySelector("#autoacc")
var commonField=document.querySelector("#common")


anyaccInput.oninput=(e)=>{
    if(!isNaN(e.target.value)){
            accidentMath(+e.target.value)
    }
    else{
        console.log("Error: Input needs to be number!")
        return;
    }
}


function accidentMath(num){
    //half n double our arg
 
    var double=num*2
    var triple=num*3

    autoField.value=double;
    commonField.value=triple;
}



var addChildBtn=document.querySelector(".add-child");
var addSpouseBtn=document.querySelector(".add-spouse");
var btns=[addChildBtn,addSpouseBtn]

btns.forEach((btn,idx)=>{
    btn.onclick=()=>addName(idx)
})


function addName(idx){
    var name=prompt("Name?")
    var birthday=prompt("Birthday?")
  
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(name))
        li.style.listStyle='none'
        var h3=document.createElement("h3")
        h3.appendChild(document.createTextNode("Name: " + name + " Born: " + birthday))

    
    
        if(idx === 0){
            li.style.color='blue'
            document.querySelector(".childrenh3").appendChild(li)
        }
        else{
            li.style.color='red'
            document.querySelector(".spouseh3").appendChild(li)
        }

        document.querySelector(".familymembers").appendChild(h3)
}


var dayInput=document.querySelector("#day");


dayInput.oninput=(e)=>{
    if(!isNaN(e.target.value)){
        lifePay(+e.target.value)
}
else{
    console.log("Error: Input needs to be number!")
    return;
}
}


function lifePay(value){
    let monthPay=value*30;
    let final=value*30 * 500;

    document.querySelector("#month").value=monthPay
    document.querySelector("#wholelife").value=final
}



//plan2 logic

var dayInput=document.querySelector(".dayinput");
var monthField=document.querySelector(".monthinput")

var dayInputTwo=document.querySelector(".dayinputtwo");
var monthFieldTwo=document.querySelector(".monthinputtwo")

dayInput.oninput=(e)=>{
    console.log(e.target.value)
    if(!isNaN(e.target.value)){
        planTwo(+e.target.value)
    }
}


dayInputTwo.oninput=(e)=>{
    console.log(e.target.value)
    if(!isNaN(e.target.value)){
        var month=(+e.target.value)*30;

        monthFieldTwo.value=month;
    }
}


function planTwo(num){
    var month=num*30;

    monthField.value=month;
}




//plan two

var overNightInputTwo=document.querySelector("#overnighttwo");
var erCareFieldTwo=document.querySelector("#erCaretwo")
var intensiveFieldTwo=document.querySelector("#intensivetwo")
var annualFieldTwo=document.querySelector("#annualtwo")
var anyaccInputTwo=document.querySelector("#anyacctwo")
var autoFieldTwo=document.querySelector("#autoacctwo")
var commonFieldTwo=document.querySelector("#commontwo")


overNightInputTwo.oninput=(e)=>{
    console.log("WTF?")
    if(!isNaN(e.target.value)){
            outputValTwo(+e.target.value)
    }
    else{
        console.log("Error: Input needs to be number!")
        return;
    }
}


function outputValTwo(num){
    //half n double our arg
    var half=num/2
    var double=num*2
    var hundred=num*100
    var annual=num*365;

    erCareFieldTwo.value=half;
    intensiveFieldTwo.value=double;
    anyaccInputTwo.value=hundred

    var doubleAcc=hundred*2
    var tripleAcc=hundred*3

    autoFieldTwo.value=doubleAcc;
    commonFieldTwo.value=tripleAcc;
    annualFieldTwo.value=annual
}