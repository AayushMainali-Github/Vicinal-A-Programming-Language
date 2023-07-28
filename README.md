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

- `System.MakeBoolean(a,b)`  
  - A boolean type variable `a` is created whole value is `b`.  
  - The first argument should be the name of variable that you want to create.  
    There should not be a variable with that name already defined before.
  - The second argument should either be a boolean type variable or a boolean.

- `System.ChangeNumber(a,b)`  
  - The value of a number type variable `a` is changed to `b`.  
  - The first argument should be a number type variable whole value you want to change.
  - The second argument should either be a number type variable or a number.

- `System.ChangeString(a,b)`  
  - The value of a string type variable `a` is changed to `b`.  
  - The first argument should be a string type variable whole value you want to change.
  - The second argument should either be a string type variable or a string.

- `System.ChangeBoolean(a,b)`  
  - The value of a boolean type variable `a` is changed to `b`.  
  - The first argument should be a boolean type variable whole value you want to change.
  - The second argument should either be a boolean type variable or a boolean.

- `System.PrintNumber(a)`  
  - Prints the number `a`.
  - The first argument should either be a number type variable or a number.

- `System.PrintString(a)`  
  - Prints the string `a`.
  - The first argument should either be a string type variable or a string.

- `System.PrintBoolean(a)`  
  - Prints the boolean `a`.
  - The first argument should either be a boolean type variable or a boolean.

- `System.RemoveNumber(a)`  
  - Removes the number `a`.
  - The first argument should be a number type variable.

- `System.RemoveString(a)`  
  - Removes the string `a`.
  - The first argument should be a string type variable.

- `System.RemoveBoolean(a)`  
  - Removes the boolean `a`.
  - The first argument should be a boolean type variable.

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

- `Number.Equal(a,b,c)`  
  - If `a` is equal to `b` then the value of `c` is set to true else false.
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a boolean type variable.

- `Number.LessThan(a,b,c)`  
  - If `a` is less than `b` then the value of `c` is set to true else false.
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a boolean type variable.

- `Number.MoreThan(a,b,c)`  
  - If `a` is more than `b` then the value of `c` is set to true else false.
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a boolean type variable.

- `Number.ToString(a)`  
  - Converts number `a` to string.
  - The first argument should be a number type variable.

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

- `String.Repeat(a,b,c)`  
  - Repeats `a`, `b` times and puts the value in `c`.  
  - The first argument should either be a string type variable or a string. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a string type variable.

- `String.LowerCase(a,b)`  
  - Converts all the alphabets in `a` to lowercase and puts the value in `b`.  
  - The first argument should either be a string type variable or a string. 
  - The second argument should be a string type variable.

- `String.UpperCase(a,b)`  
  - Converts all the alphabets in `a` to uppercase and puts the value in `b`.  
  - The first argument should either be a string type variable or a string. 
  - The second argument should be a string type variable.

- `String.Equal(a,b,c)`  
  - If `a` is equal to `b` then the value of `c` is set to true else false.
  - The first argument should either be a string type variable or a string. 
  - The second argument should either be a string type variable or a string.
  - The third argument should be a boolean type variable.

- `String.StartsWith(a,b,c)`  
  - If `a` starts with `b` then the value of `c` is set to true else false.
  - The first argument should either be a string type variable or a string. 
  - The second argument should either be a string type variable or a string.
  - The third argument should be a boolean type variable.

- `String.EndsWith(a,b,c)`  
  - If `a` ends with `b` then the value of `c` is set to true else false.
  - The first argument should either be a string type variable or a string. 
  - The second argument should either be a string type variable or a string.
  - The third argument should be a boolean type variable.

- `String.At(a,b,c)`  
  - Changes the value of `c` to the character at position `b` in string `a`. The position starts from `0`.  
    For example if `String.At("Hello World",1,variable)` is called then the value of variable is set to `e`.
  - The first argument should either be a string type variable or a string. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a string type variable.

- `String.ToNumber(a)`  
  - Converts string `a` to number.
  - The first argument should be a string type variable.

### File Functions

- `File.Run(a)`  
  - Runs the code in file `a`.  
  - The first argument should either be a string type variable or a string which is a valid file path.

- `File.IfRun(a,b)`  
  - Runs the code in file `a` if boolean `b` is true.  
  - The first argument should either be a string type variable or a string which is a valid file path. 
  - The second argument should either be a boolean type variable or a boolean.


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
- `Examples/Example5` Prints Hello World in uppercase.

# Changelogs

## Version 0.1.3
- Added new functions
    - `Number.ToString`
    - `String.ToNumber`
    - `String.At`

## Version 0.1.2
- Added new functions
    - `String.Equal`
    - `String.StartsWith`
    - `String.EndsWith`

## Version 0.1.1
- Added new functions
    - `Number.Equal`
    - `Number.LessThan`
    - `Number.MoreThan`

## Version 0.1.0
- Added changelogs
- Added new functions
    - `System.RemoveNumber`
    - `System.RemoveString`
    - `System.RemoveBoolean`

## Version 0.0.4
- Added new functions
    - `String.Repeat`
    - `String.LowerCase`
    - `String.UpperCase`
- Added new example
    - `Examples/Example5`

## Version 0.0.3
- Added new function
    - `File.IfRun`

## Version 0.0.2
- Added the functionality of boolean
- Added new functions
    - `System.MakeBoolean`
    - `System.ChangeBoolean`
    - `System.PrintBoolean`

## Version 0.0.1
- Initial release
- Added the functionality of variables, strings, numbers, file system
- Added new functions
    - `System.MakeNumber`
    - `System.MakeString`
    - `System.ChangeNumber`
    - `System.ChangeString`
    - `System.PrintNumber`
    - `System.PrintString`
    - `System.ViewVariables`
    - `String.Length`
    - `String.Concat`
    - `Number.Add`
    - `Number.Subtract`
    - `Number.Multiply`
    - `Number.Divide`
    - `Number.Quotient`
    - `Number.Remainder`
    - `File.Run`
    - `File.Loop`
- Added new examples
    - `Examples/Example1`
    - `Examples/Example2`
    - `Examples/Example3`
    - `Examples/Example4`
