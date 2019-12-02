let empCode = document.getElementById("empCode");
let submit = document.getElementById("submit"); 

function optionSelected (event)
{
    const selected= event.target.value;
    document.getElementById('submit').classList.replace("notvisible","submitButton");
    if (selected =='faculty')
    {
        document.getElementById('worker').classList.replace("workerVisible", "notvisible");
        document.getElementById('faculty').classList.replace("notvisible", "facultyVisible");
    }
    else if (selected == 'regularWorker')
    {
        document.getElementById('faculty').classList.replace("facultyVisible", "notvisible");
        document.getElementById('worker').classList.replace("notvisible", "workerVisible");
    }
}

function calDecduction(grossSalary)
{
    if (grossSalary > 2500.00)
    {
        let canIncomeTax = 0.25 * (grossSalary - 2500.00);
        let healthSurge = 0;
            if ((grossSalary-2500) > 3000)
            {
                 healthSurge = 33.00;
            }
            else
            {
                 healthSurge = 19.20;
            }    
        let totaltax = canIncomeTax + parseFloat(healthSurge);
        return totaltax;
    }
    else
    {
        return 0;
    }
}

function calPayroll()
{
    let empNumber = document.getElementById('empNumber').value;
    let empName =  document.getElementById('empName').value;
    let empDepart = document.getElementById('empDepart').value;
    let empWorkHrs = document.getElementById('empWorkHrs').value;    
    let qualCode= document.getElementById("qualCode").value;
    let grossSalary = 0;
    if (empCode.value == 'faculty')
    {        
        if (qualCode == 'M')
        {
            grossSalary = parseFloat(175 * empWorkHrs) + 1500;
            
        }
        else if (qualCode == 'B')
        {
            grossSalary = parseFloat(100 * empWorkHrs) + 600;
        }
        else
        {
            window.alert("qualification code can only be M or B");
        }
    }
    else if (empCode.value == 'regularWorker')
    {
        let fixedSalary = document.getElementById('fixedSalary').value;
        if (empWorkHrs == 160)
        {
            grossSalary = fixedSalary;
        }
        else if (empWorkHrs < 160 && empWorkHrs>=0)
        {
            grossSalary = empWorkHrs * fixedSalary/160;
        }
        else if (empWorkHrs > 160)
        {
            grossSalary = parseFloat (fixedSalary) + (empWorkHrs-160)*(fixedSalary/80);
            // double payment for hrs>160
        }
        else
        {
            window.alert("work Hrs cannot be -ve");
        }

    }
    let deduction = calDecduction(grossSalary);
    let netSalary = grossSalary - deduction;
    document.getElementById('displayResults').innerHTML=   `<div>Employee name : ${empName}</div>
                                                            <div>Employee work Hrs : ${empWorkHrs} </div>                                                         
                                                            <div>Employee number : ${empNumber}</div>
                                                            <div>Employee Gross Salary : $ ${grossSalary} </div>
                                                            <div>Employee department : ${empDepart} </div> 
                                                            <div>Tax Deduction : $ ${deduction} </div>
                                                            <div>Employee type : ${empCode.value} </div>  
                                                            <div>Net salary : $ ${netSalary} </div> `;
}



submit.addEventListener("click", calPayroll);
empCode.addEventListener("change", optionSelected);