let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
function calculateGrade(marks) {
    if (marks > 100 || marks < 0) {
      return "Invalid input";
    } else if (marks >= 80) {
      return "A";
    } else if (marks >= 60 && marks <= 79) {
      return "B";
    } else if (marks >= 50 && marks <= 59) {
      return "C";
    } else if (marks >= 40 && marks <= 49) {
      return "D";
    } else {
      return "E";
    }
  }
  
  let marks = prompt("Enter student marks (between 0 and 100):");
  console.log(calculateGrade(marks));
  










finalOutput='assign your final output to this variable'
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
let speed = prompt("Enter the speed of the car:");

if (speed < 70) {
  console.log("Ok");
} else {
  let demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log("Points:", demeritPoints);
  }
}













finalOutput='assign your final output to this variable'
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge
function calculateNetSalary(basicSalary, benefits) {
    // KRA tax rates
    const kraRates = {
      bands: [24000, 40200, 53550, 76100, 115000, 115000],
      rates: [0.1, 0.15, 0.20, 0.25, 0.3, 0.3],
      relief: 2499
    };
  
    // NHIF rates
    const nhifRates = [
      { min: 0, max: 5999, rate: 150 },
      { min: 6000, max: 7999, rate: 300 },
      { min: 8000, max: 11999, rate: 400 },
      { min: 12000, max: 14999, rate: 500 },
      { min: 15000, max: 19999, rate: 600 },
      { min: 20000, max: 24999, rate: 750 },
      { min: 25000, max: 29999, rate: 850 },
      { min: 30000, max: 34999, rate: 900 },
      { min: 35000, max: 39999, rate: 950 },
      { min: 40000, max: 44999, rate: 1000 },
      { min: 45000, max: 49999, rate: 1100 },
      { min: 50000, max: 59999, rate: 1200 },
      { min: 60000, max: 69999, rate: 1300 },
      { min: 70000, max: 79999, rate: 1400 },
      { min: 80000, max: 89999, rate: 1500 },
      { min: 90000, max: 99999, rate: 1600 },
      { min: 100000, max: Infinity, rate: 1700 }
    ];
  
    // NSSF rates
    const nssfRates = {
      employee: 0.06,
      employer: 0.06
    };
  
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;
  
    // Calculate payee (i.e. Tax)
    let payee = 0;
    let taxableIncome = grossSalary - kraRates.relief;
    let bands = kraRates.bands;
    let rates = kraRates.rates;
  
    for (let i = 0; i < bands.length; i++) {
      if (taxableIncome <= bands[i]) {
        payee += taxableIncome * rates[i];
        break;
      } else {
        payee += bands[i] * rates[i];
        taxableIncome -= bands[i];
      }
    }
  
    // Calculate NHIF deductions
    let nhifDeductions = 0;
    for (let i = 0; i < nhifRates.length; i++) {
      if (grossSalary >= nhifRates[i].min && grossSalary <= nhifRates[i].max) {
        nhifDeductions = nhifRates[i].rate;
        break;
      }
    }
  
    // Calculate NSSF deductions
    let nssfDeductions = nssfRates.employee * grossSalary;
  
    // Calculate net salary
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    return {
      grossSalary: grossSalary,
      payee: payee,
      nhifDeductions: nhifDeductions,
      nssfDeductions: nssfDeductions,
      netSalary: netSalary
    };
  }
  
  let basicSalary = parseFloat(prompt("Enter your basic salary:"));
  let benefits = parseFloat(prompt("Enter your benefits:"));
  
  let netSalary = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary:", netSalary.grossSalary);
  console.log("Payee (Tax):", netSalary.payee);
  console.log("NHIF Deductions:", netSalary.nhifDeductions);
  console.log("NSSF Deductions:", netSalary.nssfDeductions);
  console.log("Net Salary:", netSalary.netSalary);











finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})