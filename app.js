  
    let skillsArray = [];
    let counter = 0;
    let skillCounter = 1;
    const addSkillBtn = document.getElementById("confirm-skill-btn");
    const userInput = document.getElementById("skill-input");
    const skillList = document.getElementById("skill-list");
    const nextStepBtn = document.getElementsByClassName("next-step");



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
    newLi.innerHTML = `
    <div id="result-modal">
         <div id = "number">
            ${skillCounter}
         </div>
         <div>
            ${userInput.value}
         </div>
    </div>
    `;
    // newLi.textContent = `${userInput.value}`;
    skillList.appendChild(newLi);
    skillCounter++;
}

function clearField(){
for(const index of skillsArray){
    if(index.length != 0){
        userInput.value = "";
    }
}
}

function goToNextStep(){
    const label = document.getElementById("input-label");

}
addSkillBtn.addEventListener("click", addSkill);
nextStepBtn.addEventListener("click", goToNextStep);