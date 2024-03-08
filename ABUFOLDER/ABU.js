
var show=document.getElementById("show");
var read=document.getElementById("click");
read.addEventListener("click",()=>{
    if (show.style.display=="none") {
       show.style.display="block";
      
    }
    else{
        show.style.display="none";
    
    }
});

const faculty_togle=document.getElementById("faculty_countainer");
const togglebtn=document.getElementById("faculty_togle");
togglebtn.addEventListener("click",()=>{
    if (faculty_togle.style.display=="none") {
        faculty_togle.style.display="block";
        
        togglebtn.textContent="HIDE";
    }
    else{
        faculty_togle.style.display="none";
      //  
      togglebtn.textContent="Vieww Facaulties";
    }
});
const scrollIntoView=document.getElementById('scrollIntoView');
const hotLinkScroll=document.getElementById('hotLinkScroll');

hotLinkScroll.addEventListener('click',  ()=>{
scrollIntoView.scrollIntoView({behvior:"smooth"

})
//
});
$(document).ready(function(){
    $("#abureadMore").click(function(){
        $("#read").hide();
    });
});






