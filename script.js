var enterButton=document.getElementById('btn')
// alert(enterButton)
var input=document.getElementById("userInput")

var ul=document.querySelector('ul')

var item=document.getElementsByTagName('li')


function inputLength(){
    return input.value.length   
}


function listLength(){
    return item.length
}

function createListElement(){
    var li1=document.createElement("li")
    li1.appendChild(document.createTextNode(input.value))
    ul.appendChild(li1)
    input.value=" "
    // function crossOut(){
        li1.classList.toggle("done")
    // }
    // li1.addEventListener("click",crossOut)

    var dBtn=document.createElement("button")
    dBtn.appendChild(document.createTextNode("X"))
    li1.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItems())
    function deleteListItems(){
       li1.classList.toggle("done")
    //    li1.classList.add("delete")
    }
  
}

function addListAfterClick(){
    if(inputLength()>0){
        createListElement()
    }
}
function addListAfterKeypress(event){
    if(inputLength()>0 && event.which==13){
        createListElement()
    }
}
enterButton.addEventListener("click",addListAfterClick)
input.addEventListener("keypress",addListAfterKeypress)
 