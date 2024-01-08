const btn = document.querySelector(".toggle")
const passkey = document.querySelectorAll("input")[1]

 var check = true


btn.addEventListener("click",(e)=>{

    const DOM = e.target
   DOM.classList.toggle("show")
    
   if(DOM.classList.contains("show")){
     passkey.setAttribute("type","text")
    
    // alert(passkey.value)
   }else{
    passkey.setAttribute("type","password")
    
   }

})

 /*class User{
    constructor(name,pass)
} */


