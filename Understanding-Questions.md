# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
handleClick is called
dispatch invokes addOne()
addOne supplies a type of 'ADD_ONE'
our reducer recognizes the case of 'ADD_ONE' and executes its command
* TotalDisplay shows the total plus 1.
