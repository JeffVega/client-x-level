function calHeightToCm(feet,inches){
  // ABV = (og – fg) * 131.25
     let cm = (feet * 12) + inches ;
    let newCm = cm * 2.54
    return Math.round(newCm)
}
function calPoundsToKg(weight){
  let kg = weight * 0.45359237;
return Math.round(kg)
  
}
console.log(calPoundsToKg(200))

function activityLevel(level){
  if(level === 1 ){
    return 1.2
  }
    if(level === 2 ){
    return 1.2
  }
    if(level === 3 ){
    return 1.375
  }
    if(level === 4 ){
    return 1.55
  }
    if(level === 5 ){
    return 1.725
  }

}

function percentOfWeightLose(percent){
  if(percent === 1){
    return 0.10
  }
  if(percent === 2){
    return 0.20
  }
}

calHeightToCm(5,11)
function calWeightLose(feet,inches,weight,age,sex,level,percent){
let height2 = calHeightToCm(feet,inches)
let weight2 = calPoundsToKg(weight)
let level2 = activityLevel(level)
let percent2 = percentOfWeightLose(percent)
if(sex === "male"){
  console.log(height2)
  console.log(weight2)
  console.log(age)
let weight3 =  (10 * weight2 + 6.25 * height2 - 5 * age +5) 
console.log(weight3)
let weight4 = weight3 * level2
console.log(weight4)
let weight5 = weight4 - (weight4 * percent2)
let finalWeight = Math.round(weight5)
return finalWeight;
 
}
if(sex === "female"){
let weight3 = 10 * weight + 6.25 * height - 5 * age - 161  
console.log(weight3)
let weight4 = weight3 * level2
console.log(weight4)
let weight5 = weight4 - (weight4 * percent2)
let finalWeight = Math.round(weight5)
return finalWeight;
}
 
}
console.log("this is your daily calories",calWeightLose(6,0,194,29,"male",5,2))

function calProteinToWeight(weight){
  let proteinOutput = weight * 0.825
  let finalProtein = Math.round(proteinOutput)
  return finalProtein
}
console.log("this is your daily protein",calProteinToWeight(194))

function calFatToCalories(calories){
  calories2 = calories * 0.25 / 9 
  let finalCalories = Math.round(calories2)
  return finalCalories
}
console.log("this is your daily fat",calFatToCalories(3250))