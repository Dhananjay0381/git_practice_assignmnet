//for pildrome 
let str = "naman";
let new_str=""
for (let i=str.length-1;i>=0;i--){
 
         new_str = new_str + str[i]
    }
  if (str == new_str)
  {
      console.log("Yes");
  }
  else
  {
      console.log("No");
      
  }

//for prime numbers till the given number 
let n=15
for(let j=1;j<=n;j++){
  let count = 0
for (let i=1; i<=j;i++){
if (j%i==0){
count++
}
}
if (count==2){
console.log(j);    
}
}