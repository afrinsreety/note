
window.localStorage.setItem("name", "Shakil")
window.localStorage.setItem("age", "12")
localStorage.getItem("age")
'12'
localStorage.getItem("name")
'Shakil'
let employees=[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
employees
(3) [{…}, {…}, {…}]0: firstName: "John"lastName: "Doe"[[Prototype]]: Object1: {firstName: 'Anna', lastName: 'Smith'}2: {firstName: 'Peter', lastName: 'Jones'}length: 3[[Prototype]]: Array(0)
typeof employees
'object'
// localStorage.setItem("employees",employees)


// localStorage.getItem("employees")
// '[object Object],[object Object],[object Object]'
JSON.stringify(employees)
'[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]'
let employeesString = JSON.stringify(employees);


employeesString
'[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]'
localStorage.setItem("employees",employeesString)


localStorage.getItem("employees")
'[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]'
JSON.parse(employeesString)
(3) [{…}, {…}, {…}]0: {firstName: 'John', lastName: 'Doe'}firstName: "John"lastName: "Doe"[[Prototype]]: Object1: {firstName: 'Anna', lastName: 'Smith'}2: {firstName: 'Peter', lastName: 'Jones'}length: 3[[Prototype]]: Array(0)