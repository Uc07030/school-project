
const table = document.querySelector("#table");
const courseCode = document.querySelector(".course");
const grade = document.querySelector(".courseGrade");
const add = document.querySelector(".add");
const tbody = document.querySelector("#tbody");
const courseunit = document.querySelector("#unit");
const calculatecgp = document.querySelector("#cal");
const sp = document.getElementById("sp"); // Select the element for displaying GPA
const tfooter = document.getElementById("foot"); // Select the element for displaying GPA

const gradeArray = [];
let sum = 0, totalunit = 0, totalgp = 0;

add.addEventListener("click", () => {
    if (grade.value === "" ||  courseCode.value === "") {
        alert('incorrect input');
    } else {
        const tr = document.createElement("tr");
        const tdcourseCode = document.createElement("td");
        tdcourseCode.innerHTML = courseCode.value;

        const tdcourseunit = document.createElement("td");
        tdcourseunit.innerHTML = courseunit.value;

        const tdgrade = document.createElement("td");
        tdgrade.innerHTML = grade.value;
        tr.appendChild(tdcourseCode);
        tr.appendChild(tdcourseunit);
        tr.appendChild(tdgrade);
        const body = tbody.appendChild(tr);
        table.classList.remove('table');
        table.appendChild(body);
        gradeArray.push({
            "courseLoad": courseunit.value,
            "couseGrade": grade.value
        });
        courseCode.value = '';
        courseunit.value = '';
        grade.value = '';
    }
});

calculatecgp.addEventListener("click", () => {
    let result = 0;
    totalunit = 0;
    let tu=0;

    gradeArray.forEach(element => {
        // Compare grade values case-insensitively
        const gradeValue = element.couseGrade.toUpperCase();

        if (gradeValue === "A") {
            result += element.courseLoad * 5;
         
        } else if (gradeValue === "B") {
            result += element.courseLoad * 4;
        
        } else if (gradeValue === "C") {
            result += element.courseLoad * 3;
        
        } else if (gradeValue === "D") {
            result += element.courseLoad * 2;
          
        } else if (gradeValue === "E") {
            result += element.courseLoad * 1;
            
        } else if (gradeValue === "F") {
            result += element.courseLoad * 0;
        }
        totalunit+=parseInt( element.courseLoad);
    });


    sum = result;
    totalgp = `${(sum / totalunit).toFixed(1)}`;
    const tr=document.createElement("tr")
    const tdtotalgp= document.createElement("td")
    const tdsum = document.createElement("td")
    const  tdotalunit= document.createElement("td")
    tdtotalgp.innerHTML=`total cgp=${totalgp }`
    tdsum.innerHTML=`total points=${ sum}`
    tdotalunit.innerHTML=`total course unit=${totalunit}`
    tr.appendChild(tdtotalgp)
    tr.appendChild(tdsum )
    tr.appendChild( tdotalunit)
    tfooter .appendChild(tr);
    table.appendChild(tfooter)
   
    console.log(`totalunit=${totalunit}`)
    console.log(`sum=${sum}`)
    console.log(totalgp)
});