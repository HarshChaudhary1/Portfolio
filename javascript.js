window.addEventListener("scroll",()=>{
    let header=document.getElementById("nav-bar")
    let value=window.scrollY
    if(value > 102){
        header.style.backgroundImage="linear-gradient(to right, #00b4db, #12c3ff)";
        header.querySelectorAll("a").forEach((value)=>{
            value.style.color="white"
        })
    }
    else{
        header.style.backgroundImage="none";
        header.querySelectorAll("a").forEach((value)=>{
            value.style.color="black"
        })
    }

     if(value > 250){
        document.getElementById("uparrow-3").style.visibility="visible"
    }
    else{
        document.getElementById("uparrow-3").style.visibility="hidden"
    }

})

$(window).on("scroll",()=>{
    let value=window.scrollY
    if(value>2250){
        document.getElementById("uparrow-3").querySelector("a").style.color="white"
    }
    else{
        document.getElementById("uparrow-3").querySelector("a").style.color="#0087b0"
    }
})