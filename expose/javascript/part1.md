
**1.What is printed by line 9? If the code returns an error, explain why.**  
values added: 20  

**2.What is printed by line 13? If the code returns an error, explain why.**  
final result: 20  

**3.What is printed by line 9? If the code returns an error, explain why.**  
values added: 20  

**4.What is printed by line 13? If the code returns an error, explain why.**  
ReferenceError: result is not defined  
The code returns an error, because let variables are not added to the global object. It only exists in the "if" block.  
Therefore, when the outside code uses “result” again, it will return an error because this variable does not exist.  

**5.What is printed by line 9? If the code returns an error, explain why.**  
Cannot assign to "result" because it is a constant  
The code returns an error, because variables defined with const cannot be Reassigned.  

**6.What is printed by line 13? If the code returns an error, explain why.**  
Since the program breaks on the line 7, the line 13 will not be output anything.  
ariables defined with const cannot be Reassigned.  
