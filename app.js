  
    // let skillsArray = [];
    let counter = 0;
    let skillCounter = 1;
    const addSkillBtn = document.getElementById("confirm-skill-btn");
    const userInput = document.getElementById("skill-input");
    const skillList = document.getElementById("skill-list");
    const nextStepBtn = document.getElementsByClassName("next-step");
    const skillFinalArray = [];

    function deleteSkillHandler(skillId){
        console.log("the id you want to delete is: ", skillId);
        let number=0;
        for(const index of skillFinalArray){
            if(index.id == skillId){
    
                break;
            }
        number++;
        }
        skillFinalArray.splice(number,1);
        skillList.children[number].remove();
        console.log(`the ${number} file deleted`);
      
    
    }


function addSkill(){

    // const editBtn = document.getElementById("edit-svg");
    const usrInput = userInput.value;
    const skillValue = getProgressAmount();
    console.log("skill value is: ", skillValue);
    if(usrInput.trim() === ''){
        alert("لطفا فیلد مربوط به مهارت را پر کنید");
    }
    else if (skillValue == '') 
    {
        alert("لطفا میزان مهارت خود را انتخاب نمایید");    
    }
    const newSkill = {
        id: Math.random().toString(),
        title: usrInput,
        skillValue: skillValue
    };
    
        // skillsArray.push(usrInput);
        showResult();
        clearField();
    
    skillFinalArray.push(newSkill);
    const deleteBtn = document.getElementById("delete-svg");
    console.log("the id is: ", newSkill.id);

    deleteBtn.addEventListener("click", deleteSkillHandler.bind(null,newSkill.id));
    // editBtn.addEventListener("click", editSkillHandler.bind(null,id));  
}


function getProgressAmount(){

    const progressArray = document.querySelectorAll('input[name="skill-input-percent"]');
    let progressValue =''; 
    for(const progress of progressArray){
        if(progress.checked){
            progressValue = progress.value;
            break;
        }
    }
    return progressValue;
}

function showResult() {
    const progressAmount = getProgressAmount();
    const newSkill = document.createElement("div");
    newSkill.id = "result-modal";
    newSkill.innerHTML = `
         <div id = "number">
            ${skillCounter}
         </div>
         <div id="each-result">
         <div id="result-content">
            ${userInput.value}
         </div>
         <div id="result-progress">
         <progress value= ${progressAmount} max="100">
         </div>
         </div>

         <div id="edit-box">
         <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6" id="edit-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
         </svg>

         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" id="delete-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
         </svg>
         </div>
    `;
    // newLi.textContent = `${userInput.value}`;
    skillList.appendChild(newSkill);
    skillCounter++;
 
}



function clearField(){
for(const index of skillFinalArray){
    if(index.length != 0){
        userInput.value = "";
    }
}
}

function goToNextStep(){
    const label = document.getElementById("input-label");

}
addSkillBtn.addEventListener("click", addSkill);
// nextStepBtn.addEventListener("click", goToNextStep);