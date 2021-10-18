function oneThroughTwenty() {
    let oneThroughTwentyArray = []; 
    for(let i = 1; i <= 20; i++ ) {
      oneThroughTwentyArray.push(i);
    }
    return oneThroughTwentyArray; 
}
console.log(oneThroughTwenty());

function evensToTwenty() {

  let evensToTwentyArray = []; 
  for(let i = 2; i <= 20; i += 2 ) {
    evensToTwentyArray.push(i);
  }
  return evensToTwentyArray; 
}

console.log(evensToTwenty());

function oddsToTwenty() {
  let oddsToTwentyArray= [];  
  for(let i = 1; i <= 20; i += 2 ) {
    oddsToTwentyArray.push(i);
  }
  return oddsToTwentyArray; 
   
}
console.log(oddsToTwenty());



function multiplesOfFive() {
  
  let multiplesOfFiveArray= [];  
  for(let i = 5; i <= 100; i += 5 ) {
    multiplesOfFiveArray.push(i);
  }
  return multiplesOfFiveArray; 

}
console.log(multiplesOfFive());


function squareNumbers() {

  let squareNumbersArray= [];  
  for(let i = 1; i <= 10; i++ ) {
    let square = i * i;
    squareNumbersArray.push(square);
  }
  return squareNumbersArray;     
}

console.log(squareNumbers());

function countingBackwards() {
  let countingBackwardsArray = []; 
    for(let i = 20; i >= 0; i-- ) {
      countingBackwardsArray.push(i);
    }
    return countingBackwardsArray; 
}

console.log(countingBackwards());


function evenNumbersBackwards() {
    
  let evenNumbersBackwardsArray = []; 
  for(let i = 20; i >= 2; i -= 2 ) {
    evenNumbersBackwardsArray.push(i);
  }
  return evenNumbersBackwardsArray; 
}

console.log(evenNumbersBackwards());



function oddNumbersBackwards() {
    
  let oddNumbersBackwardsArray= [];  
  for(let i = 19; i >= 1; i -= 2 ) {
    oddNumbersBackwardsArray.push(i);
  }
  return oddNumbersBackwardsArray; 
}
console.log(oddNumbersBackwards());


function multiplesOfFiveBackwards() {
    
  let multiplesOfFiveBackwardsArray= [];  
  for(let i = 100; i >= 5; i -= 5 ) {
    multiplesOfFiveBackwardsArray.push(i);
  }
  return multiplesOfFiveBackwardsArray; 
}
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
    
  let squareNumbersBackwardsArray= [];  
  for(let i = 10; i >= 1; i-- ) {
    let squareback = i * i;
    squareNumbersBackwardsArray.push(squareback);
  }
  return squareNumbersBackwardsArray;   
}
console.log(squareNumbersBackwards());

