const  buttons=document.querySelectorAll("button");
const  operator=document.querySelectorAll(".operator");
const  display =document.querySelector(".display");
const specal_Char=["=","+","-","*","/","%"];
let result="";
let checked_Dot=false;
 const calculate=(btn_value)=>{
    
     if(btn_value==="AC"){
    
        result=""
    

    }
    else if(btn_value=="="&&!result=="")
    {
        result=eval(result.replace("%","/100"));
       
    }
    else if(btn_value==="DEL"){
        result=result.toString().slice(0,-1);
     
    }
    else {
        if(result===""&& specal_Char.includes(btn_value)){
            return 
        }
        if(btn_value=="."&&checked_Dot){ return }
        if(btn_value=="."){
            checked_Dot=true
        } 
       
        
        result+=btn_value;
    }
    display.value=result 
     console.log(display.value)
 }
buttons.forEach(button=>{
    button.addEventListener("click", e=> calculate(e.target.dataset.value)
    
     )
})
/*
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let result = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const btnValue = e.target.dataset.value;

        switch (btnValue) {
            case "AC":
                result = "";
                break;
            case "=":
                if (result !== "") {
                    try {
                        result = eval(result.replace("%", "/100"));
                    } catch (error) {
                        result = "Error"; // Handle potential evaluation errors
                    }
                }
                break;
            case "DEL":
                result = result.slice(0, -1);
                break;
            default:
                result += btnValue;
        }

        display.value = result;
    });
});
     */                                                   
