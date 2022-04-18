  
    let skillsArray = [];
    const addSkillBtn = document.getElementById("confirm-skill-btn");
    const userInput = document.getElementById("skill-input");
    const skillList = document.getElementById("skill-list");


function addSkill(){
    
    const usrInput = userInput.value;
    if(usrInput.trim() === ''){
        alert("please put an invalid value");
    }
    else{
        skillsArray.push(usrInput);
        showResult();
        clearField();
    }
}

function showResult() {
    const newLi = document.createElement("li");
    newLi.textContent = `${userInput.value}`;
    skillList.appendChild(newLi);
}

function clearField(){
for(const index of skillsArray){
    if(index.length != 0){
        userInput.value = "";
    }
}
}
addSkillBtn.addEventListener("click", addSkill);