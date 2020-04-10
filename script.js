
window.addEventListener('DOMContentLoaded',()=>{
var client=prompt("Client name?")
var bday=prompt("Birthday?")

var h1=document.createElement("h1")
h1.appendChild(document.createTextNode("A plan for: " + client + " " +  bday))
document.querySelector("#client").appendChild(h1)

})

//edit top-name/bday code


document.querySelector("#client").onclick=()=>{
    var client=prompt("Client name?")
    var bday=prompt("Birthday?")

var h1=document.createElement("h1")
document.querySelector("#client").innerHTML=""
h1.appendChild(document.createTextNode("A plan for: " + client + " " + bday))
document.querySelector("#client").appendChild(h1)
}

/* end edit */


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






/* new code */


/* end new */





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
var monthInput=document.querySelector(".monthinput")

var dayInputTwo=document.querySelector(".dayinputtwo");
var monthInputTwo=document.querySelector(".monthinputtwo")

monthInputTwo.oninput=(e)=>{
 
    console.log(e.target.value)
    if(!isNaN(e.target.value)){
        planTwo(+e.target.value)
    }
}


monthInput.oninput=(e)=>{
   
    console.log(e.target.value)
    if(!isNaN(e.target.value)){
        var day=(+e.target.value)/30;

        dayInput.value=`${day.toFixed(2)} dollar a day`;
    }
}


function planTwo(num){
 
    
    var day=num/30;

    dayInputTwo.value=`${day.toFixed(2)} dollar a day`;
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



/* New Code */


//add Member Btns
var addChildBtn=document.querySelector(".add-child");
var addSpouseBtn=document.querySelector(".add-spouse");
var enterChildBtn=document.querySelector(".enterChildBtn")
var enterSpouseBtn=document.querySelector(".enterSpouseBtn")
var addSpouseModal=document.querySelector(".addspousemodal")
var addChildModal=document.querySelector(".addchildmodal")


//populate inputs
var months=['January','February','March','April','May','June','July','August','September','October','November','December']


var yearHtml=""
for(let i=1920;i<2010;i++){
        yearHtml += `<option value=${i}>${i}</option>`
}


var monthHtml=""

months.forEach(m=>{
    monthHtml += `<option value=${m}>${m}</option>`
})

var dayHtml=""

for(let i=1;i<32;i++){
    dayHtml+= `<option value=${i}>${i}</option>`
}

console.log(monthHtml)
console.log(dayHtml)


document.querySelector("#monthselect").innerHTML=monthHtml
document.querySelector("#year").innerHTML=yearHtml
document.querySelector("#dayselect").innerHTML=dayHtml

document.querySelector("#childmonthselect").innerHTML=monthHtml
document.querySelector("#childyear").innerHTML=yearHtml
document.querySelector("#childdayselect").innerHTML=dayHtml







//enterMemberBtn.onclick=addMember


addChildBtn.onclick=()=>{
    addChildModal.classList.toggle("showchildmodal")
}

addSpouseBtn.onclick=()=>{
    addSpouseModal.classList.toggle("showspousemodal")
}

// function addChild(){
//     addMemberModal.classList.toggle('showspousemodal')

//     var li=document.createElement("li");
//     var name=document.querySelector("#name").value
//     var month=document.querySelector("#monthselect").value;
//     var day=document.querySelector("#dayselect").value;
//     var year=document.querySelector("#year").value;
//     var bday=month + " " + day + " " + year
      
     
//         li.appendChild(document.createTextNode('Coverage towards: ' + name))
        
    
//         li.style.listStyle='none'
//         var h3=document.createElement("h3")
//         h3.appendChild(document.createTextNode("Name: " + name + " Born: " + bday))

    
    
       
//             li.style.color='green'
//             document.querySelector(".childrenh3").appendChild(li)
        
      

//         document.querySelector(".members").appendChild(h3)
//         addMemberModal.classList.toggle('showmodal')
// }







//enter spouse

enterSpouseBtn.onclick=()=>{
    var li=document.createElement("li");
    var name=document.querySelector("#name").value
    var month=document.querySelector("#monthselect").value;
    var day=document.querySelector("#dayselect").value;
    var year=document.querySelector("#year").value;

    var bday=month + " " + day + " " + year
      
     
        li.appendChild(document.createTextNode('Coverage towards: ' + name))
        
    
        li.style.listStyle='none'
        var h3=document.createElement("h3")
        h3.appendChild(document.createTextNode("Name: " + name + " Born: " + bday))

    
    
      
            li.style.color='green'
            document.querySelector(".spouseh3").appendChild(li)
        

        document.querySelector(".members").appendChild(h3)

        addSpouseModal.classList.toggle("showspousemodal")
        name.innerHTML=""
}




//enter child
enterChildBtn.onclick=()=>{
    var li=document.createElement("li");
    li.className='kid-li'
    var name=document.querySelector("#childname").value
    var month=document.querySelector("#childmonthselect").value;
    var day=document.querySelector("#childdayselect").value;
    var year=document.querySelector("#childyear").value;
    var bday=month + " " + day + " " + year
      
     
        li.appendChild(document.createTextNode('Coverage towards: ' + name))
        
    
        li.style.listStyle='none'
        var h3=document.createElement("h3")
        h3.appendChild(document.createTextNode("Name: " + name + " Born: " + bday))

    
    
       
            li.style.color='green'
            document.querySelector(".childrenh3").appendChild(li)
        
       document.querySelector(".members").appendChild(h3)

       addChildModal.classList.toggle('showchildmodal')

       name.value=""


     
    
}


//changes uptop

document.querySelectorAll('.members').forEach(m=>{
    m.onclick=(e)=>{
        console.log('fx fired!')
        var change=prompt('Name?');
        var birth=prompt("Birthday?")
        e.target.innerHTML=`Name:${change} Birthdy:${birth}`


  
    }
})


document.querySelectorAll(".childrenh3").forEach(li=>{
    li.onclick=(e)=>{
        console.log("hey!!")
        var change=prompt("Change to?")
        e.target.innerHTML=""
        e.target.innerHTML = 'Coverage towards: ' + change
    }
})



