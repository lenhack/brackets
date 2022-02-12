module.exports = function check(str, bracketsConfig) {
  // your solution
  
  const objectOfBrackets = {};
  const openBrackets = [];
  
  for(let i = 0; i < bracketsConfig.length; i++){
    objectOfBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
    openBrackets.push(bracketsConfig[i][0]);
  } 


  let stack = [];
  for(let i = 0; i < str.length; i++){
    let cur = str[i];
   
    if(stack.length === 0){
      if(openBrackets.includes(cur)){
        stack.push(cur);
      } else {
        return false;
      }
    } else {
      if(objectOfBrackets[cur] === stack[stack.length - 1]){
        stack.pop();
      } else if(openBrackets.includes(cur)){
        stack.push(cur);
      }
    }    
  }
   return stack.length === 0;
}
