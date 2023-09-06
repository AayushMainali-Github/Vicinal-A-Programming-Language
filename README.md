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

- `System.RemoveVariables()`  
  - Deletes all the variables defined in the program.

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

- `Number.Power(a,b,c)`  
  - Calculates `a` to the power `b` and puts the result in `c`.
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

- `Number.Root(a,b,c)`  
  - Calculates `b`th root of `a` and puts the result in `c`.
  - The first argument should either be a number type variable or a number. 
  - The second argument should either be a number type variable or a number.
  - The third argument should be a number type variable.

- `Number.Square(a,b)`  
  - Calculates the square of `a` and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.Cube(a,b)`  
  - Calculates the cube of `a` and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.SqRoot(a,b)`  
  - Calculates the square root of `a` and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.'

- `Number.CuRoot(a,b)`  
  - Calculates the cube root of `a` and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.Absolute(a,b)`  
  - Calculates the absolute value of `a` and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.Random(a)`  
  - Sets the value of `a` to random float between 0 and 1 (0 <= x < 1)
  - The first argument should be a number type variable.

- `Number.Round(a,b)`  
  - Rounds `a` to the nearest integer and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.Floor(a,b)`  
  - Rounds down `a` to the nearest integer and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.Ceil(a,b)`  
  - Rounds up `a` to the nearest integer and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.Trunc(a,b)`  
  - Removes the fractional part of `a` and puts the result in `b`.
  - The first argument should either be a number type variable or a number.
  - The second argument should be a number type variable.

- `Number.FixedTo(a,b,c)`  
  - Converts `a` to a number with `b` number of decimals and puts the result in `c`.
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

- `Number.Includes(a,b,c)`  
  - If `a` includes `b` then the value of `c` is set to true else false.
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

- `String.Replace(a,b,c)`  
  - Replaces `b` with `c` in string variable `a`.  
  - The first argument should be a string type variable. 
  - The second argument should either be a string type variable or a string.
  - The third argument should either be a string type variable or a string.

- `String.AllReplace(a,b,c)`  
  - Replaces all `b` with `c` in string variable `a`.  
  - The first argument should be a string type variable. 
  - The second argument should either be a string type variable or a string.
  - The third argument should either be a string type variable or a string.

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

- `String.Includes(a,b,c)`  
  - If `a` includes `b` then the value of `c` is set to true else false.
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

### Boolean Functions

- `Boolean.And(a,b,c)`
  - Passes `a` and `b` to an AND GATE and sets the output to `c`.
  - The first argument should either be a boolean type variable or a boolean. 
  - The second argument should either be a boolean type variable or a boolean.
  - The third argument should be a boolean type variable.

- `Boolean.Or(a,b,c)`
  - Passes `a` and `b` to an OR GATE and sets the output to `c`.
  - The first argument should either be a boolean type variable or a boolean. 
  - The second argument should either be a boolean type variable or a boolean.
  - The third argument should be a boolean type variable.

- `Boolean.Not(a,b)`
  - Passes `a` to a NOT GATE and sets the output to `b`.
  - The first argument should either be a boolean type variable or a boolean. 
  - The second argument should be a boolean type variable.

- `Boolean.Nand(a,b,c)`
  - Passes `a` and `b` to an NAND GATE and sets the output to `c`.
  - The first argument should either be a boolean type variable or a boolean. 
  - The second argument should either be a boolean type variable or a boolean.
  - The third argument should be a boolean type variable.

- `Boolean.Nor(a,b,c)`
  - Passes `a` and `b` to an NOR GATE and sets the output to `c`.
  - The first argument should either be a boolean type variable or a boolean. 
  - The second argument should either be a boolean type variable or a boolean.
  - The third argument should be a boolean type variable.

- `Boolean.Xor(a,b,c)`
  - Passes `a` and `b` to an XOR GATE and sets the output to `c`.
  - The first argument should either be a boolean type variable or a boolean. 
  - The second argument should either be a boolean type variable or a boolean.
  - The third argument should be a boolean type variable.

- `Boolean.Xnor(a,b,c)`
  - Passes `a` and `b` to an XNOR GATE and sets the output to `c`.
  - The first argument should either be a boolean type variable or a boolean. 
  - The second argument should either be a boolean type variable or a boolean.
  - The third argument should be a boolean type variable.

### Date Functions

- `Date.Full(a)`
  - Sets the value of string variable `a` to the current full date and time in the format `MM/dd/yyyy hh:mm:ss`.  
  - The first argument should be a string type variable.

- `Date.Time(a)`
  - Sets the value of string variable `a` to the current time in the format `hh:mm:ss`.  
  - The first argument should be a string type variable.

- `Date.Year(a)`
  - Sets the value of string variable `a` to the current year in the format `yyyy`.  
  - The first argument should be a string type variable.

- `Date.Month(a)`
  - Sets the value of string variable `a` to the current month in the format `MM`.  
  - The first argument should be a string type variable.

- `Date.Date(a)`
  - Sets the value of string variable `a` to the current date in the format `dd`.  
  - The first argument should be a string type variable.

- `Date.Day(a)`
  - Sets the value of string variable `a` to the current day of the week.  
  - The first argument should be a string type variable.

- `Date.Hour(a)`
  - Sets the value of string variable `a` to the current hour in the format `hh`.  
  - The first argument should be a string type variable.

- `Date.Minute(a)`
  - Sets the value of string variable `a` to the current minute in the format `mm`.  
  - The first argument should be a string type variable.

- `Date.Second(a)`
  - Sets the value of string variable `a` to the current second in the format `ss`.  
  - The first argument should be a string type variable.

- `Date.Millisecond(a)`
  - Sets the value of string variable `a` to the current millisecond.  
  - The first argument should be a string type variable.


### File Functions

- `File.Run(a)`  
  - Runs the code in file `a`.  
  - The first argument should either be a string type variable or a string which is a valid file path.

- `File.IfRun(a,b)`  
  - Runs the code in file `a` if boolean `b` is true.  
  - The first argument should either be a string type variable or a string which is a valid file path. 
  - The second argument should either be a boolean type variable or a boolean.

- `File.IfElseRun(a,b,c)`  
  - Runs the code in file `a` if boolean `c` is true else runs the code in the file `b`.  
  - The first argument should either be a string type variable or a string which is a valid file path. 
  - The second argument should either be a string type variable or a string which is a valid file path. 
  - The third argument should either be a boolean type variable or a boolean.

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

## Version 0.3.3
- Added new functions
    - `Number.Absolute`
    - `Number.Random`
    - `Number.Round`
    - `Number.Floor`
    - `Number.Ceil`
    - `Number.Trunc`
    - `Number.FixedTo`

## Version 0.3.2
- Added new functions
    - `Number.Power`
    - `Number.Root`
    - `Number.Square`
    - `Number.Cube`
    - `Number.SqRoot`
    - `Number.CuRoot`

## Version 0.3.1
- Fixed some errors in the docs
- Added new functions
    - `Date.Day`
    - `Date.Millisecond`

## Version 0.3.0
- Added the functionality of date
- Added new functions
    - `Date.Time`
    - `Date.Full`
    - `Date.Year`
    - `Date.Month`
    - `Date.Date`
    - `Date.Hour`
    - `Date.Minute`
    - `Date.Second`

## Version 0.2.1
- Added new functions
    - `Boolean.Xor`
    - `Boolean.Xnor`
    - `System.RemoveVariables`

## Version 0.2.0
- Added new functions
    - `String.Includes`
    - `Number.Includes`
    - `Boolean.And`
    - `Boolean.Or`
    - `Boolean.Not`
    - `Boolean.Nand`
    - `Boolean.Nor`

## Version 0.1.4
- Added new functions
    - `String.Replace`
    - `String.AllReplace`
    - `File.IfElseRun`

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
