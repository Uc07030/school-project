let nav1=document.querySelector("#click");
let fo=document.querySelector("#scroll");
nav1.addEventListener('click', function(){
 
	fo.scrollIntoView(true);
});


/*let scroll=document.querySelector('#top');
scroll.addEventListener('click',fun, false);
function fun(){
 document.body.scrollIntoView({behavior:'smooth'});


}
