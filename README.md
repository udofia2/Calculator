# Calculator
A simple calculator that can calculate mathematical expressions

## How it works
A string is provided in the command line interface after running "node calculator.js" without the quotes.

Calculator.js file imports parse.js, stack.js and toPrefix.js files to be used for the calculation.

parse.js first converts the string provided on the CLI to array, while toPrefix.js converts the given array to prefix, ready for mathetical operation.
The real calculation is done in the file called stack.js.

## How to use
1. clone the repo
2. run 'node calculator' on the command line without the     quotation marks
3. follow the onscreen instructions on how to use the app
4. If none mathetical expression is provided, the CLI        closes with an error message. If this happens, please     repeat step 2 and follow the onscreen instructions

## Features to improve
Due to time constraint, parenthesis was not considered.
The function of the parenthesis is to give the mathetical operations order of preference (i.e to indicate if to consider multiplication, addition etc first in the expression). Example of mathetical expression with parenthesis is 3*(3+3).
Another feature to improve on is double values mathetical expressions


## Credits
Many thanks to my mentor THOMAS, who took out time from his busy schedule to test and reviewed my app.

THE INSTRUCTION FOR THE APP CLEARLY STATED THAT THE PROJECT SHOULD BE DONE WITH PURE JAVASCRIPT.

