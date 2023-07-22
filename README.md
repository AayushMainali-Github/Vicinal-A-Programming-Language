# Vicinal

A programming language written in **typescript** that uses functions to do everything.

# How to use?

Clone the repository and write the code in a `main.vcnl` file inside the `Code` folder.  
If its your first time just do `npm i` in the terminal.  
After you finish writing the code just do `npm start` in the terminal.  
You should be able to see the output in the terminal.  
Check out the `Examples` folder for some reference or read the **documentation** below.

# Documentation

## Functions

### System Functions  

- `System.MakeNumber(a,b)`  
  - A number type variable `a` is created whole value is `b`.  
  - The first argument should be the name of variable that you want to create.  
    There should not be a variable with that name already defined before.
  - The second argument should either be a number type variable or a number.

- `System.MakeString(a,b)`  
  - A string type variable `a` is created whole value is `b`.  
  - The first argument should be the name of variable that you want to create.  
    There should not be a variable with that name already defined before.
  - The second argument should either be a string type variable or a string.

- `System.ChangeNumber(a,b)`  
  - The value of a number type variable `a` is changed to `b`.  
  - The first argument should be a number type variable whole value you want to change.
  - The second argument should either be a number type variable or a number.

- `System.ChangeString(a,b)`  
  - The value of a string type variable `a` is changed to `b`.  
  - The first argument should be a string type variable whole value you want to change.
  - The second argument should either be a string type variable or a string.

- `System.PrintNumber(a)`  
  - Prints the number `a`.
  - The first argument should either be a number type variable or a number.

- `System.PrintString(a)`  
  - Prints the string `a`.
  - The first argument should either be a string type variable or a string.

- `System.ViewVariables()`  
  - Prints the state of all the variables defined in the program.

### Number Functions  

- `Number.Add(a,b,c)`  
  - Adds `a` and `b` and puts the value in `c`.  
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

- `Number.Subtract(a,b,c)`  
  - Subtracts `a` and `b` and puts the value in `c`.  
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

- `Number.Multiply(a,b,c)`  
  - Multiplies `a` and `b` and puts the value in `c`.  
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

- `Number.Divide(a,b,c)`  
  - Divides `a` and `b` and puts the value in `c`.  
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

- `Number.Quotient(a,b,c)`  
  - Divides `a` and `b` and puts the quotient in `c`.
  - The first argument should either be a number type variable or a number.
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

- `Number.Remainder(a,b,c)`  
  - Divides `a` and `b` and puts the remainder in `c`.
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

### String Functions

- `String.Length(a,b)`  
  - Puts the length of `a` in `b`.  
  - The first argument should either be a string type variable or a string. 
  - The second argument should be a number type variable.

- `String.Concat(a,b,c)`  
  - Concats `a` and `b` and puts the value in `c`.  
  - The first argument should either be a string type variable or a string. 
  - The second argument should either be a string type variable or a string.
  - The third argument should be a string type variable.

### File Functions

- `File.Run(a)`  
  - Runs the code in file `a`.  
  - The first argument should either be a string type variable or a string which is a valid file path.

- `File.Loop(a,b)`  
  - Runs the code in file `a`, `b` times.  
  - The first argument should either be a string type variable or a string which is a valid file path. 
  - The second argument should either be a number type variable or a number.

## Variable Names

A variable name must start with `A-Z | a-z | _` and can contain `A-Z | a-z | 0-9 | _ | -`

## Examples

Examples can be found in the folder named `Examples`. Description of examples are given below.
- `Examples/Example1` Prints Hello World.
- `Examples/Example2` Adds two numbers and prints it.
- `Examples/Example3` Prints the length of a string.
- `Examples/Example4` Prints Hello World 5 times.