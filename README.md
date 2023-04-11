# JavaScript: Advanced Concepts

## 02. Execution Contexts and Lexical Environments

- Syntax Parser: a program that reads your code and determines what it does and if its grammar is valid.
- Lexical Environment: where something sits physically in the code you write.
- Execution Context: a wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently running is managed via execution context. It can contain things beyond what you've written in your code.
- Hoisting: setup memory space for variables and functions.
- Don't set variables to `undefined` by hand, use `null` instead.
- Scope: where a variable is available in your code.
- The Event Queue won't be processed until the execution stack is empty.

## 03. Types and Operators

- Primite Types: a type of data that represents a single value.
  1. `undefined`
  1. `null`
  1. `boolean`
  1. `number`
  1. `bigint`
  1. `string`
  1. `symbol`
- Operator Precedence: which operator function gets called first. [Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)
- Associativity: what order operator functions get called in(L2R or R2L).
- Coercion: converting a value from one type to another.
- Equality Comparisons And Sameness: [Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#comparing_equality_methods)

## 04. Object and Functions

- Function Currying: creating a copy of ac function but with some preset parameters.

## 05. Object-Oriented JavaScript and Prototypal Inheritance

- Inheritance: one object gets access to the properties and methods of another object.
- Reflection: an object can look at itself, listing and changing its properties and methods.

## 06. Building Objects

- Polyfill: code that adds a feature which the engine may lack.
- Syntactic Sugar: a different wat to type something that doesn't change how it works under the hood.

## 10. TypeScript, ES6, and Transpiled Languages

- Transpile: convert the syntax of one programming language to another.
