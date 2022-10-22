**1. What will happen at line 12 and why? If the code causes an error, explain why.**  
In line 12, it will print 3 to the console.  
Because the input for prices is [100, 200, 300]  lenght is 3.  
In the for loop, i=0, i<3, then i=i+1=1, still less than 3, then i=i+1=2, 2<3, i=i+1=3.  
now i=3, and break the loop. Since i using var, it is a global variable.  
Thus, line 12 can print 3.  

**2. What will happen at line 13 and why? If the code causes an error, explain why.**  
In line 13, it will print 150 to the console.  
Because discountedPrice is defined with var, it is still a global variable, so it can be accessed.   
And in the last loop, i=2, the value of prices[2] is 300, which is 150 after 50% discount.  

**3. What will happen at line 14 and why? If the code causes an error, explain why.**  
In line 14, it will print 150 to the console.  
The reason is the same as Q2   
And because discountedPrice is an integer, the value of discountedPrice is equal to the value of finalPrice.  
still print 150  

**4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.**  
It will return  [50, 100, 150]  
Because this function discounts the value in prices according to the value of discount. 
The values in prices is 100,200,300.  
Here, the discount is 50%, so all the values in prices are divided by 2.   
And they are all integers, return [50, 100, 150]  

**5. What will happen at line 12 and why?  If the code causes an error, explain why.**  
If this function is called, an error will occur. Because i is defined using Let, not a global variable.  
In line 12, i cannot be called because i is inside the for loop.  
But, nothing has happened yet. Because this code snippet does not call this function.  


**6. What will happen at line 13 and why? If the code causes an error, explain why.**    
Code causes an error,  
Line 13 calls discountedPrice again outside the for loop.   
Since discountedPrice is defined using let, it is not a global variable.   
The program cannot get the value of discountedPrice in line 13, resulting in an error.  


**7. What will happen at line 14 and why? If the code causes an error, explain why.**  
In line 14, it will print 150 to the console.  
Although finalPrice uses the let definition, it is still in the same block as line 14 and can be used successfully.  

**8. What will this function return? Give a brief explanation. If the code causes an error, explain why.**  
It will return a list: [50, 100, 150]  
Because this function discounts the value in prices according to the value of discount. 
The values in prices is 100,200,300.  
Here, the discount is 50%, so all the values in prices are divided by 2.  
And they are all integers, return [50, 100, 150]  

**9. What will happen at line 11 and why? If the code causes an error, explain why.**  
Code causes an error,  
Line 11 calls i again outside the for loop.   
Since i is defined using let, it is not a global variable.   
The program cannot get the value of i in line 11, resulting in an error.  

**10. What will happen at line 12 and why? If the code causes an error, explain why.**   
In line 12, it will print 3 to the console.  
Since prices is [100, 200, 300]  
Its length is 3, and in line 3 the variable length is assigned the value 3.
It is in the same block as line 12 and can be called.  

**11. What will this function return? Give a brief explanation. If the code causes an error, explain why.**  
It will return a list: [50, 100, 150]  
Because this function discounts the value in prices according to the value of discount. 
The values in prices is 100,200,300.  
Here, the discount is 50%, so all the values in prices are divided by 2.  
And they are all integers, return [50, 100, 150]  

**12.Given the above Object, write the notation for:**  
**A.Accessing the value of the name property in the student object**  
student.name   
**B.Accessing the value of the Grad Year property in the student object**  
student['Grad year']  
**C.Calling the function for the greeting property in the student object**  
student.greeting()  
**D.Accessing the name property of the object in the Favorite Teacher property in student**  
student['Favorite Teacher'].name  
**E.Access index zero in the array of the courseLoad property of the student object**  
student.courseLoad[0]  

**13.Arithmetic**   
**A.'3' + 2**  
output: '32'  
since integers map to their exact string representation  
**B.'3' - 2**  
output: 1  
Since the string cannot be subtracted, the string is converted to a number.  
**C.3 + null**  
output: 3  
Since one of the objects is a number, null is converted to 0  
**D.'3' + null**  
output: '3null'   
Since one of the objects is a string, null is converted to 'null'.  
**E.true + 3**    
output: 4  
true = 1,   3 + 1 = 4  
**F.false + null**  
output: 0  
false = 0, null can converted to 0, 0+0=0  
**G.'3' + undefined**  
output: '3undefined'   
Since one of the objects is a string, undefined is converted to 'undefined'.  
**H.'3' - undefined**  
output: NaN  
Since the string cannot be subtracted, and undefined = NaN, output NaN   

**14. Comparison**
**A.'2' > 1**  
output: true  
When comparing values of different types, JavaScript converts the values to numbers.  
**B.'2' < '12'**  
output: false  
Because this is a comparison of 2 strings, the 2 strings are not the same.  
**C.2 == '2'**  
output: true  
Comparing two variables, ignores the datatype of variable
so, 2 = 2  
**D.2 === '2'**  
output: false  
=== will check the data type, which are 2 different types.  
**E.true == 2**  
output: false  
true =1, 1 is not equal to 2  
**F.true === Boolean(2)**  
output: true  
Boolean(2) == true, so return true  
  
**15.Explain the difference between the == and === operators.**  
== ignores the datatype of variable  
=== checks datatype 

**16.Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)**  
you can go to check part2-question16.js in the repo, or see code below.
```
let statistics = {
    redCars : 21,
    blueCars : 45,
    greenCars :12,
    raceCars:5,
    blackCars: 40,
    rareCars:2
};

for(let car in statistics){
    if(car[0]==='r' || statistics[car]%2!==0){
        console.log(statistics[car]);
    }
}
```

**17.If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.**  
The modifyArray() function will use the function doSomething() to operate the values in the array [1, 2, 3]. Function doSomething() will multiply the numbers in this array by 2. So the new array returned is [2, 4, 6]. Since this array is not assigned to other variables, there will be no output.   

**18.The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)**  
you can go to check part2-question18.js in the repo, or see code below.
```
 function t(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval( t,1000)

```  
**19.What is the output of the above code? (This should be in your part2.md)**  
the output is:  
1  
4  
3  
2  
  
The numbers 1 and 4 don't need to wait. they will output first  
Then the number 3 will be output after 0ms  
Number 2 needs to wait 1000ms to output.  
