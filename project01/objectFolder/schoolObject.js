const schoolObject={
    student:{
        name:"Emmanuel",
        depatment:"computer science",
        level:300,
        getProp:function(){
          return `your Name is ${this.name}\n your department is
          ${this.depatment}\n ${this.level}`
        },
    },
    
    course:
        ["mth101","physics 101","other"]
        
    }
    const courseInfo=schoolObject.course;
    for(let key=0;key< courseInfo.length;key++)
    {
        console.log(courseInfo.key)
    }
console.log()