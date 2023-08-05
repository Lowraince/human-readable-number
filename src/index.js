module.exports = function toReadable (number) {
    let num = number.toString();
  let splitNum = num.split("");

  const objUnits = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};
  const objTens = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen" };
  const objTensWithZero = { 20: "twenty", 30: "thirty", 40: "forty",50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"}

  result = ""

  const objUnitsCycle = (n) => {
    for(let prop in objUnits){
      if(prop === `${n}`){
        return objUnits[prop]
      }
    }
  }

  const objTensCycle = (n) => {
    for(let prop in objTens){
      if(prop === `${n}`){
        return objTens[prop]
      }
    }
  }

  const objTensWithZeroCycle = (n) => {
    for(let prop in objTensWithZero){
      if(prop === `${n}`){
        return objTensWithZero[prop]
      }
    }
  }

  const objTwZforThreeNumberCycle = (n) => {
    for(let prop in objTensWithZero){
      if(prop === `${splitNum[1] + "0"}`){
        return objTensWithZero[prop]
      }
    }
  }

  const objTwZforThreeNumberCycleWithZero = (n) => {
    for(let prop in objTensWithZero){
      if(prop === `${splitNum[1] + "0"}`){
        return `${objTensWithZero[prop]} ${objUnitsCycle(splitNum[2])}`
      }
    }
  }

//для единиц
  if(splitNum.length === 1){
    return result = objUnitsCycle(num)
  }

//для десяток
  if(splitNum.length === 2) {
    if(number >= 10 && number < 20){
      return result = objTensCycle(num)
    }else if(number >= 20){

      if(splitNum[1] !== "0"){
        return result = `${objTensWithZeroCycle(splitNum[0] + "0")} ${objUnitsCycle(splitNum[1])}`
      }else {
        return result = `${objTensWithZeroCycle(splitNum[0] + "0")}`
      }
    }
  }

//для трехзначных чисел
  if(splitNum.length === 3){
    if(splitNum[1] === "0" && splitNum[2] === "0"){
        return result = `${objUnitsCycle(splitNum[0])} hundred`
    }
    if(splitNum[1] + splitNum[2] < 20 ){
      if(splitNum[1] === "0" && splitNum[2] <= 9) {
        return result = `${objUnitsCycle(splitNum[0])} hundred ${objUnitsCycle(splitNum[2])}`
      }else if (splitNum[1] !== "0"){
        return result = `${objUnitsCycle(splitNum[0])} hundred ${objTensCycle(splitNum[1] + splitNum[2])}`
      }
    }else if(splitNum[1] + splitNum[2] >= 20 ){
      if (splitNum[2] === "0"){
        return result = `${objUnitsCycle(splitNum[0])} hundred ${objTwZforThreeNumberCycle(splitNum[1])}`
      }else if (splitNum[2] !== "0"){
        return result = `${objUnitsCycle(splitNum[0])} hundred ${objTwZforThreeNumberCycleWithZero(splitNum[1])}`
      }
    }
  }
    return result;
}
