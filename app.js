let screen=document.querySelector(".scrn");
let buttons=document.querySelectorAll(".button");
let equalsto=document.querySelector(".equalsTo")
let cancel=document.querySelector(".cancel")

buttons.forEach(function(button){

button.addEventListener("click",btnpress)

    function btnpress(e){
       value=e.target.id;
       screen.value+=value;
       console.log(value)
    }

})

equalsto.addEventListener("click",ans);

function ans(){
    if(screen.value != ""){
        let ans=eval(screen.value);
        screen.value=ans;
    }
    else{
        screen.value=""
    }
}

cancel.addEventListener("click", clearscreen);


function clearscreen(){
    screen.value="";
}




