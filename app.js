const h1 = document.querySelector(".hello h1");


function handletitleclick(){
    h1.style.color = "blue"
    
}

function handlemouseenter(){
   h1.innerText ="mouse is here"
}

function handlemouseleave(){
    h1.innerText = "mouse is gone"
}

function handlewindowresize(){
    document.body.style.backgroundColor = "red";
}

function handlewindowcopy(){
    alert("복사했다!!!!!") 
}

function handlewindowpaste(){
    alert("붙여넣었다!!!")
}

function handlewindowoffline(){
    alert("살려줘")
}

function handlewindowonline(){
    alert("좋아쒀~")
}
    

h1.addEventListener("click", handletitleclick);
h1.addEventListener("mouseenter", handlemouseenter);
h1.addEventListener("mouseleave", handlemouseleave);

window.addEventListener("resize",handlewindowresize);
window.addEventListener("copy", handlewindowcopy);
window.addEventListener("paste", handlewindowpaste);
window.addEventListener("offline",handlewindowoffline);
window.addEventListener("online",handlewindowonline);