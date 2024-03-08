const firstnav=document.querySelector(".nav-A")
  const sectnav=document.querySelector(".nav-B")
  function shownav(){
    if (window.scrollY>0) {
      firstnav.style.display="none"
      sectnav.style.display="block"
      
    } else {
      firstnav.style.display="block"
      sectnav.style.display="none"
    }
  }
  window.addEventListener("scroll",sectnav)
  const autotype=document.querySelector("#txt-auto-type")
  const autotype2=document.querySelector("#txt-auto-type2")
  function autotyping(){
    autotype.innerHTML="";
    autotype2.innerHTML="";
    if(a)


  }
  window.addEventListener("onload",autotyping())
