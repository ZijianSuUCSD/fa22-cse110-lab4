**1.What was the bug?**  
The function takes 2 input values as strings, but we want numbers  

**2.How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)**  
In the function calculateSum(num1,num2), use the Number() function to convert the input to a number.  
```
function calculateSum(num1, num2) {
  let result = Number(num1) + Number(num2)
  return result
```
